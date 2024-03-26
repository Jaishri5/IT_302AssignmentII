/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.util.ArrayList;
import java.util.Scanner;
/**
 *
 * @author jaish
 */
class Edge{
    char src;
    char dest;
    
    Edge()
    {
        src='A';
        dest='A';
        
    }
    Edge(char src,char dst)
    {
        this.src=src;
        dest=dst;
        
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
public class JP_HillClimbingAlgorithm {
    public static void main(String args[])
    {
        Scanner s=new Scanner(System.in);
        System.out.print("Enter the number of nodes: ");
        int n=s.nextInt();
        System.out.print("Enter the number of edges: ");
        int e=s.nextInt();
        char st,d;
        int w;
        System.out.println("Enter all the pairs of source and destination nodes (For example if A->B then enter A and B)");
        ArrayList<Edge> gr=new ArrayList<>(e);
        ArrayList<Character> N=new ArrayList<>();
        ArrayList<Node> h=new ArrayList<>(n);
        ArrayList<Node> OPEN=new ArrayList<>();
       ArrayList<Node> f=new ArrayList<>(n);
        for(int i=0;i<e;i++)
        {   st=s.next().charAt(0);
            d=s.next().charAt(0);
            
            gr.add(new Edge(st,d));
        }
        System.out.println("Enter all the nodes and their heuristic cost (For example if h(A)=10 then enter A and 10)");
        for(int i=0;i<n;i++)
        {   st=s.next().charAt(0);
            
            w=s.nextInt();
            h.add(new Node(st,w));
        }
        System.out.print("Enter the starting node: ");
        char S=s.next().charAt(0);
        System.out.print("Enter the goal node: ");
        char G=s.next().charAt(0);       
        /*1. INITIALISE: Set f(s)=h(s), OPEN={S} CLOSE={}*/
        w=heuristicCost(S,h);
        f.add(new Node(S,w));
        OPEN.add(new Node(S,w));
        displayOPEN(OPEN);
        int flag=0;//flag becomes 1 when Terminates with success
        /*2.FAIL: If OPEN={} then terminate with failure*/
        while(OPEN.size()>0)
        {/*3.SELECT:select the min cost node n from OPEN and move it to CLOSE*/
            Node MinN=OPEN.get(0);
            int j=0;
            for(int i=0;i<OPEN.size();i++)
            {
                if(MinN.v > OPEN.get(i).v)
                {
                    MinN=OPEN.get(i);
                    j=i;
                }                
            }
            System.out.println("Minimum node chosen: "+MinN.n+" :"+MinN.v);
            
            N.add(OPEN.get(j).n);
            OPEN.remove(j);
            
            /*4.TERMINATE:If n belongs to G then terminate with success*/
            if(MinN.n==G)
            {
                flag=1;
                break;
            }
            /*5.GENERATE:
                Generate successors of n such that for each successor m ,f(m)=h(m) */            
            char M;
            OPEN.clear();
            for(int i=0;i<gr.size();i++)
            {
                if(gr.get(i).src==MinN.n)
                {   M=gr.get(i).dest;
                    w=heuristicCost(M,h);
                  
                    f.add(new Node(M,w));
                    OPEN.add(new Node(M,w));
                }
            }  
            displayOPEN(OPEN);            
        }
        if(flag==1)
        {   displayOPEN(OPEN);
            for(int i=0;i<N.size();i++)
            {
                System.out.print(N.get(i)+"-->");
                
            }
            System.out.println("\nTERMINATED WITH SUCCESS");
        }  
        else
            System.out.println("TERMINATED WITH FAILURE");
    }
   
    static int heuristicCost(char N,ArrayList<Node> h)
    {
        for(int i=0;i<h.size();i++)
        {
            if(N==h.get(i).n)
                return h.get(i).v;
        }
        return 0;
    }      
    static void displayOPEN(ArrayList<Node> OPEN)
    {   System.out.print("OPEN: ");
        for(int i=0;i<OPEN.size();i++)
        {   
            System.out.print(OPEN.get(i).n+"("+OPEN.get(i).v+")");
        }
        System.out.println();
    }   
}
    

