package jaishri;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author jaish
 */
class Edge{
    char src;
    char dest;
    int wt;
    Edge()
    {
        src='A';
        dest='A';
        wt=0;
    }
    Edge(char src,char dst,int w)
    {
        this.src=src;
        dest=dst;
        wt=w;
    }    
}
class Node{
    char n;
    int v;  
    Node()
    {
        n='A';
        v=0;
    }
    Node(char n,int v)
    {
        this.n=n;
        this.v=v;
    }
    Node(Node N)
    {
        n=N.n;
        v=N.v;
    }
}
public class JP_AStarAlgorithm {
    public static void main(String args[])
    {
        Scanner s=new Scanner(System.in);
        System.out.print("Enter the number of nodes: ");
        int n=s.nextInt();
        System.out.print("Enter the number of edges: ");
        int e=s.nextInt();
        char st,d;
        int w,flag=0;//flag becomes 1 when Terminates with success
        int fc=0;
        ArrayList<Edge> gr=new ArrayList<>(e);
        ArrayList<Node> g=new ArrayList<>(n);
        ArrayList<Node> h=new ArrayList<>(n);
        ArrayList<Node> f=new ArrayList<>(n);
        ArrayList<Node> OPEN=new ArrayList<>();
        ArrayList<Node> CLOSE=new ArrayList<>();
        System.out.println("Enter all the pairs of source and destination nodes and weight between them:(For example if A->B with cost=10 then enter A B 10) ");
        for(int i=0;i<e;i++)
        {   st=s.next().charAt(0);
            d=s.next().charAt(0);
            w=s.nextInt();
            gr.add(new Edge(st,d,w));
        }
        System.out.println("Enter all the nodes and their heuristic cost ");
        for(int i=0;i<n;i++)
        {   st=s.next().charAt(0);
            
            w=s.nextInt();
            h.add(new Node(st,w));
        }
        System.out.print("Enter the starting node: ");
        char S=s.next().charAt(0);
        System.out.print("Enter the goal node: ");
        char G=s.next().charAt(0);
        
        /*1. INITIALISE: Set g(S)=0, OPEN={S} CLOSE={} f(s)=h(s)*/
        g.add(new Node(S,0));
        
        fc=heuristicCost(S,h);
        f.add(new Node(S,fc));
        OPEN.add(new Node(S,fc));
        display(OPEN);
        /*2.FAIL: If OPEN={} then terminate with failure*/
        while(OPEN.size()>0)
        {/*3.SELECT:select the min cost node n from OPEN and move it to CLOSE*/
            Node MinN=OPEN.get(0);
            int j=0;
            for(int i=0;i<OPEN.size();i++)
            {                   
                if((MinN.v > OPEN.get(i).v)||(MinN.v==OPEN.get(i).v&&actualCost(MinN.n,g)>actualCost(OPEN.get(i).n,g)))
                {   
                    MinN=OPEN.get(i);
                    j=i;
                }                
            }
            System.out.println("Minimum node chosen: "+MinN.n+" :"+MinN.v);
          //  System.out.println(OPEN.get(j).n+" is removed");
            OPEN.remove(j);
            CLOSE.add(MinN);
            /*4.TERMINATE:If n belongs to G then terminate with success*/
            if(MinN.n==G)
            {
                flag=1;
                break;
            }
            /*5.GENERATE:
                Generate successors of n such that for each successor m
            */
            /*if m does not belong to OPEN OR CLOSE
            g(m)=g(n)+g(n,m)
            f(m)=g(m)+h(m)
            ADD m to OPEN
            */
            char M;
            for(int i=0;i<gr.size();i++)
            {
                if(gr.get(i).src==MinN.n)
                {   M=gr.get(i).dest;
                    if(!belongsToList(M,OPEN)&&(!belongsToList(M,CLOSE)))
                    {   System.out.println(M+" does not belong to OPEN or CLOSE");
                        
                        w=actualCost(MinN.n,g)+actualCost(MinN.n,M,gr);
                       // System.out.println(M+": "+actualCost(MinN.n,g)+"+"+actualCost(MinN.n,M,gr));
                        g.add(new Node(M,w));
                        fc=w+heuristicCost(M,h);
                        f.add(new Node(M,fc));
                        OPEN.add(new Node(M,fc));
                    }
                    else{
                        System.out.println(M+" belongs to OPEN or CLOSE");
                        w=Math.min(actualCost(M,g),actualCost(MinN.n,g)+actualCost(MinN.n,M,gr));
                       // System.out.println("OldCost of "+M+": "+actualCost(M,g));
                       // System.out.println("New Cost of "+M+": "+w);
                        fc=w+heuristicCost(M,h);
                        if(costMChanged(M,w,g)&& belongsToList(M,CLOSE))
                        {                             
                          //  System.out.println("Cost of "+M+" changed to: "+w);
                            for(int k=0;k<g.size();k++)
                            {
                                if(M==g.get(k).n)
                                    g.get(k).v=w;
                            }
                            for(int k=0;k<f.size();k++)
                            {
                                if(M==f.get(k).n)
                                    f.get(k).v=fc;
                            }
                            for(int k=0;k<CLOSE.size();k++)
                            {
                                if(M==CLOSE.get(k).n)
                                {    CLOSE.remove(k);
                                     break;
                                }
                            }                            
                        }
                        for(int k=0;k<OPEN.size();k++)
                            {
                                if(M==OPEN.get(k).n)
                                {    OPEN.remove(k);
                                     break;
                                }
                            }
                        OPEN.add(new Node(M,fc));                                                 
                    }                    
                }
            }  
            System.out.print("OPEN: ");
            display(OPEN);
            System.out.print("CLOSE: ");
            display(CLOSE);
        }
        if(flag==1)
        {   System.out.print("OPEN: ");
            display(OPEN);
            System.out.print("CLOSE: ");
            display(CLOSE);
            System.out.println("TERMINATED WITH SUCCESS");
        }  
        else
            System.out.println("TERMINATED WITH FAILURE");
    }

    static int actualCost(char N,ArrayList<Node> g)
    {
        for(int i=0;i<g.size();i++)
        {
            if(N==g.get(i).n)
                return g.get(i).v;
        }
        return 0;
    }
    static int actualCost(char N,char M,ArrayList<Edge> gr)
    {
        for(int i=0;i<gr.size();i++)
        {
            if(N==gr.get(i).src&&M==gr.get(i).dest)
                return gr.get(i).wt;
        }
        return 0;
    }
    static boolean costMChanged(char M,int w,ArrayList<Node> g)
    {
        for(int i=0;i<g.size();i++)
        {
            if(M==g.get(i).n && w<g.get(i).v)
            {   // g.get(i).v=w;
                return true;
            }           
        }
        return false;
    }
    static boolean belongsToList(char M,ArrayList<Node> List)
    {
        for(int i=0;i<List.size();i++)
        {
            if(M==List.get(i).n)
                return true;
        }
        return false;
    }
    static void display(ArrayList<Node> List)
    {   
        for(int i=0;i<List.size();i++)
        {   
            System.out.print(List.get(i).n+"("+List.get(i).v+")");
        }
        System.out.println();
    }    
    static int heuristicCost(char M,ArrayList<Node> h)
    {
        for(int i=0;i<h.size();i++)
            if(M==h.get(i).n)
                return h.get(i).v;
        return 0;
    }
    
}
