#include<iostream>
#include<iomanip>
#include<queue>
using namespace std;
int t=0;
int FindtheNextSmallest(int **p,int ** pr,int n)
{	int min=-1;int j;
	for(j=0;j<n;j++)
	{
		if(p[j][0]!=0 && pr[j][1]<=t)
		{
			min=j;
			break;
		}	
	}	
	

	int i;
	for(i=j+1;i<n;i++)
	{	
		if(p[i][0]<p[min][0] && p[i][0]>0 && pr[i][1]<=t)
		{	
			min=i;
		}
		
	}
	return min;	
}
int main()
{
	int n;//number of processes
	int st=0;//start time
	int et=0;//end time
	//int min=0;
	int sum=0;
	//int time=0;
	int idle_time=0;
	
	cout<<"Enter the number of processes: ";
	cin>>n;
		
	int** pr=new int*[n];//stores the processing time
	cout<<"Enter the processing time  and arriving time for "<<n<<" processes "<<endl;
	for(int i=0;i<n;i++)//enter the processing time
	{	pr[i] = new int[2];
	//	cout<<"Enter the processing time for P"<<i+1<<" : ";
		cin>>pr[i][0];
		//cout<<"Enter the arrival time for P"<<i+1<<" : ";
		cin>>pr[i][1];
	}
	int temp;
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n-1;j++)
		{
			if(pr[j][1]>pr[j+1][1])
			{
				temp=pr[j][0];
				pr[j][0]=pr[j+1][0];
				pr[j+1][0]=temp;
				temp=pr[j][1];
				pr[j][1]=pr[j+1][1];
				pr[j+1][1]=temp;
			}
		}
	}
	
	//displaying the processes and processing time
	cout<<left<<setw(8)<<"Process"<<setw(15)<<" Process Time"<<setw(15)<<"Arrival Time"<<endl;
	for(int i=0;i<n;i++)
	{
		cout<<left<<setw(1)<<"P"<<setw(8)<<i+1<<setw(15)<<pr[i][0]<<setw(15)<<pr[i][1]<<endl;
	}	
	
	int** p=new int*[n];
	for (int i = 0; i < n; i++) {
        p[i] = new int[6];
    }
	for(int i=0;i<n;i++)
	{
		p[i][0]=pr[i][0];
		//p[i][5]=pr[i][5];
		p[i][1]=-1;
		sum+=pr[i][0];
	}
	
	//MAKING A GANTT CHART
	int l;	
	queue<int> q1;//for the gantt chart |0|3|
	queue<int> q2;//|3+1|
	
	q1.push(st);//
	//cout<<"Q1 Push"<<et<<endl;
	int l1=0,k=0;
	while(sum>0)
	{	//cout<<"sUM= "<<sum<<endl;
		l=FindtheNextSmallest(p,pr,n);
		
		if(l<0)//When Arrival Time for any process hasn't come yet
		{
			q2.push(-1);	//no process			
			k=1;
			while(pr[l+k][1]<=t &&(l+k)<n-1)//waiting for the next arrival time
				k++;
			t=pr[l+k][1];
			idle_time+=t-et;
			et=t;
			q1.push(et);
			//cout<<"Q1 Push"<<et<<endl;
			st=et;

		}
		else{// the shortest process was found
			q2.push(l+1);
			if(p[l][1]==-1)
				p[l][1]=st;
			k=0;
			while(pr[l+k][1]<=t &&(l+k)<n-1)// checking the next arrival time
				k++;
			if(p[l][0]<=(pr[l+k][1]-st)  )//if the process can be completed before the next arrival time
			{	//the whole process can be executed
				et=p[l][0]+st;
				p[l][2]=et;
				q1.push(et);
			
				p[l][0]-=(et-st);
				//min=p[l][0];
				sum-=(et-st);
				t=et;
				st=et;
				
			}
			else{// process can't be completed before the next arrival time OR when all the processes have arrived

				if((l+k)<(n) && t<pr[l+k][1])/*there is a next arrival time and process executes halfway till the next arrival time*/
					et=pr[l+k][1];

				else// all the processes have arrived and processes don't need to wait for the next arrival time
					et=p[l][0]+st;
				p[l][2]=et;
				q1.push(et);
			
				p[l][0]-=(et-st);
				sum-=(et-st);
				st=et;
				t=et;
			}
		}
		
				
	}
	
	//GANTT CHART
	cout<<"\nGANTT CHART\n|";
	while(!q2.empty())
	{	if(q2.front()==-1)
		{
			cout<<left<<setw(4)<<"idle" <<left<<setw(1)<<""<<"|";
		}
		else
			cout<<left<<setw(1)<<"P" <<left<<setw(4)<<q2.front()<<"|";

		q2.pop();
	}
		
	
	cout<<endl<<setw(6)<<q1.front();
	q1.pop();
	while(!q1.empty())
	{
		cout<<setw(6)<<q1.front();
		q1.pop();

	}
	int sumTAT=0;
	int sumWT=0;
	int sumRT=0;
	for(int i=0;i<n;i++)//Calculating TurnAroundTime
	{
		p[i][3]=p[i][2]-pr[i][1];//Turn Around Time= endtime- starttime
		sumTAT+=p[i][3];
		p[i][4]=p[i][3]-pr[i][0];//Waiting Time= Turn Around Time- processing time
		sumWT+=p[i][4];
		p[i][5]=p[i][1]-pr[i][1];//Response Time= start time- arrival time
		sumRT+=p[i][5];
	}
	//THROUGHPUT
	float throughput=(float)n/t;
	cout<<endl<<"\nThroughput:\n=(Total processes)/Total Time taken"<<endl;
	cout<<"= "<<n<<"/"<<t<<endl;
	cout<<"= "<<throughput<<endl;
	//PROCESS UTILIZATION
	cout<<"\nIdle Time= "<<idle_time<<endl;
	cout<<"Busy Time= "<<t-idle_time<<endl;
	cout<<"\nProcess Utilisation:\n=("<<t<<"-"<<idle_time<<")/"<<t<<endl;
	float util=((float)(t-idle_time)/t);
	cout<<"= "<<util<<endl;
	cout<<left<<setw(8)<<"Process"<<setw(20)<<"Turn Around Time"<<setw(15)<<"Waiting Time"<<setw(15)<<"Response Time"<<endl;
	for(int i=0;i<n;i++)
	{
		cout<<left<<setw(1)<<"P"<<setw(8)<<i+1<<setw(20)<<p[i][3]<<setw(15)<<p[i][4]<<setw(15)<<p[i][5]<<endl;
	}	
	float avgTAT=(float)(sumTAT)/n;
	float avgWT=(float)(sumWT)/n;
	
	float avgRT=(float)(sumRT)/n;
	cout<<"\nAverage Turn Around Time: "<<avgTAT<<endl;
	cout<<"Average Waiting Time: "<<avgWT<<endl;
	cout<<"Average Response Time: "<<avgRT<<endl;
	return 0;
}