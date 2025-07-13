export interface AWSService {
  name: string;
  description: string;
  isExamCritical: boolean;
  officialDocsUrl: string;
}

export interface ServiceCategory {
  category: string;
  services: AWSService[];
}

export const awsServicesData: ServiceCategory[] = [
  {
    category: "Compute",
    services: [
      {
        name: "Amazon EC2",
        description: "Amazon Elastic Compute Cloud (EC2) provides secure, resizable compute capacity in the cloud, designed to make web-scale cloud computing easier for developers. EC2 allows you to obtain and configure capacity with minimal friction, enabling you to scale up or down within minutes. EC2 offers over 400 instance types across multiple families: General Purpose (M5, M6i), Compute Optimized (C5, C6i), Memory Optimized (R5, R6i, X1), Storage Optimized (I3, D3), and Accelerated Computing (P4, G4). Each instance type is optimized for specific use cases such as web servers, databases, distributed analytics, high-performance computing, machine learning, and graphics workstations. EC2 provides complete control over your computing resources and runs on Amazon's proven computing environment. It features instance storage options including EBS (network-attached) and instance store (local SSD), multiple pricing models (On-Demand, Reserved, Spot), placement groups for optimized networking, enhanced networking with SR-IOV, and integration with VPC for isolated networking. EC2 instances can be launched in multiple Availability Zones for fault tolerance, and Auto Scaling ensures applications scale automatically based on demand.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/ec2/"
      },
      {
        name: "AWS Lambda",
        description: "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. Lambda automatically runs your code on high-availability compute infrastructure and performs all administration of compute resources, including server and operating system maintenance, capacity provisioning, automatic scaling, code monitoring, and logging. You pay only for the compute time you consume – there is no charge when your code is not running. Lambda supports multiple programming languages including Node.js, Python, Ruby, Java, Go, .NET Core, and custom runtimes via Lambda Layers. Functions can be triggered by over 200 AWS services and SaaS applications including S3, DynamoDB, Kinesis, SNS, SQS, API Gateway, EventBridge, and CloudWatch Events. Lambda automatically scales your application by running code in response to each trigger, scaling precisely with the size of the workload from a few requests per day to thousands per second. The service provides built-in fault tolerance, automatically spreads your code across multiple Availability Zones, and includes features like environment variables, VPC support, dead letter queues, and integration with AWS X-Ray for distributed tracing.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/lambda/"
      },
      {
        name: "Amazon ECS",
        description: "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service. It makes it easy to deploy, manage, and scale containerized applications using Docker containers. ECS eliminates the need to install and operate your own container orchestration software.",
        isExamCritical: false,
        officialDocsUrl: "https://docs.aws.amazon.com/ecs/"
      },
      {
        name: "Amazon EKS",
        description: "Amazon Elastic Kubernetes Service (EKS) is a managed service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane. EKS is certified Kubernetes conformant and integrates with AWS services.",
        isExamCritical: false,
        officialDocsUrl: "https://docs.aws.amazon.com/eks/"
      }
    ]
  },
  {
    category: "Storage",
    services: [
      {
        name: "Amazon S3",
        description: "Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability, data availability, security, and performance with 99.999999999% (11 9's) data durability. S3 is designed to store and retrieve any amount of data from anywhere on the web, making it ideal for websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. S3 provides multiple storage classes optimized for different use cases: S3 Standard for frequently accessed data, S3 Standard-IA for infrequently accessed data, S3 One Zone-IA for less critical data, S3 Glacier for long-term archive, and S3 Glacier Deep Archive for lowest-cost long-term storage. The service features comprehensive security with encryption in transit and at rest, access control through IAM policies and bucket policies, and compliance with regulations like HIPAA, PCI DSS, and SOC. S3 supports versioning, Cross-Region Replication, lifecycle management, event notifications, and integration with over 100 AWS services. Advanced features include S3 Transfer Acceleration for faster uploads, S3 Select for querying data without retrieving entire objects, and S3 Analytics for storage optimization recommendations. With virtually unlimited storage capacity and pay-as-you-use pricing, S3 scales automatically to handle growing storage needs.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/s3/"
      },
      {
        name: "Amazon EBS",
        description: "Amazon Elastic Block Store (EBS) provides high-performance block storage for use with EC2 instances. EBS volumes are network-attached storage that persist independently from the life of an instance. Multiple volume types are available for different performance and cost requirements.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/ebs/"
      },
      {
        name: "Amazon EFS",
        description: "Amazon Elastic File System (EFS) provides a simple, scalable, elastic file system for Linux-based workloads. EFS grows and shrinks automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth.",
        isExamCritical: false,
        officialDocsUrl: "https://docs.aws.amazon.com/efs/"
      }
    ]
  },
  {
    category: "Database",
    services: [
      {
        name: "Amazon RDS",
        description: "Amazon Relational Database Service (RDS) is a fully managed relational database service that makes it easy to set up, operate, and scale databases in the cloud while providing cost-efficient and resizable capacity. RDS supports six popular database engines: Amazon Aurora (MySQL and PostgreSQL compatible), PostgreSQL, MySQL, MariaDB, Oracle Database, and Microsoft SQL Server. The service automates time-consuming administration tasks including hardware provisioning, database setup, patching, backups, software updates, and failure detection and recovery. RDS provides high availability through Multi-AZ deployments that automatically provision and maintain a synchronous standby replica in a different Availability Zone, enabling automatic failover in case of planned maintenance or unplanned outages. Read replicas can be created for MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora to scale read performance and can be deployed across multiple Availability Zones or regions. Security features include network isolation using VPC, encryption at rest using AWS KMS, encryption in transit using SSL, and IAM database authentication. RDS provides automated backups with point-in-time recovery up to 35 days, and manual database snapshots that persist until explicitly deleted. Performance monitoring is available through Amazon CloudWatch and Enhanced Monitoring, with Performance Insights providing detailed database performance analytics.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/rds/"
      },
      {
        name: "Amazon DynamoDB",
        description: "Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database service designed to run high-performance applications at any scale, offering consistent single-digit millisecond latency at any scale. DynamoDB handles hardware provisioning, setup, configuration, replication, software patching, and cluster scaling automatically. The service provides two capacity modes: On-Demand for unpredictable workloads with pay-per-request pricing, and Provisioned for predictable workloads with reserved capacity. DynamoDB supports both key-value and document data structures, with flexible schema design and automatic scaling based on traffic patterns. Global Tables provide multi-master, multi-region replication for globally distributed applications with eventual consistency. The service includes built-in security features such as encryption at rest and in transit, fine-grained access control through IAM, and VPC endpoints for private connectivity. DynamoDB Streams capture data modification events in near real-time, enabling reactive programming patterns and integration with Lambda functions. Advanced features include DynamoDB Accelerator (DAX) for microsecond latency, Global Secondary Indexes (GSI) and Local Secondary Indexes (LSI) for flexible querying, Point-in-Time Recovery for backup protection, and integration with AWS analytics services for real-time and batch processing of data.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/dynamodb/"
      },
      {
        name: "Amazon Aurora",
        description: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. Aurora combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.",
        isExamCritical: false,
        officialDocsUrl: "https://docs.aws.amazon.com/aurora/"
      }
    ]
  },
  {
    category: "Networking & Content Delivery",
    services: [
      {
        name: "Amazon VPC",
        description: "Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network you define. VPC provides complete control over your virtual networking environment, including resource placement, connectivity, and security.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/vpc/"
      },
      {
        name: "Amazon Route 53",
        description: "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. Route 53 connects user requests to infrastructure running in AWS and also outside of AWS. It features health checking and automatic failover capabilities.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/route53/"
      },
      {
        name: "Elastic Load Balancing",
        description: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses. ELB provides three types of load balancers: Application, Network, and Gateway Load Balancers.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/elasticloadbalancing/"
      },
      {
        name: "Amazon CloudFront",
        description: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. CloudFront integrates with other AWS services for improved performance and cost optimization.",
        isExamCritical: false,
        officialDocsUrl: "https://docs.aws.amazon.com/cloudfront/"
      }
    ]
  },
  {
    category: "Security, Identity & Compliance",
    services: [
      {
        name: "AWS IAM",
        description: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. IAM allows you to create and manage AWS users and groups and use permissions to allow and deny their access to AWS resources through policies.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/iam/"
      },
      {
        name: "AWS KMS",
        description: "AWS Key Management Service (KMS) makes it easy to create and manage cryptographic keys and control their use across a wide range of AWS services. KMS is a secure and resilient service that uses hardware security modules to protect your keys.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/kms/"
      },
      {
        name: "AWS Secrets Manager",
        description: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. Secrets Manager enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.",
        isExamCritical: false,
        officialDocsUrl: "https://docs.aws.amazon.com/secretsmanager/"
      }
    ]
  },
  {
    category: "Management & Governance",
    services: [
      {
        name: "Amazon CloudWatch",
        description: "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/cloudwatch/"
      },
      {
        name: "AWS CloudFormation",
        description: "AWS CloudFormation provides a common language to model and provision AWS and third-party application resources in your cloud environment. CloudFormation allows you to use programming languages or a simple text file to model and provision resources needed for your applications.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/cloudformation/"
      },
      {
        name: "AWS Auto Scaling",
        description: "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Auto Scaling makes scaling simple with recommendations for optimal configurations for multiple resources.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/autoscaling/"
      }
    ]
  },
  {
    category: "Application Integration",
    services: [
      {
        name: "Amazon SQS",
        description: "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS offers two types of message queues: Standard and FIFO queues.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/sqs/"
      },
      {
        name: "Amazon SNS",
        description: "Amazon Simple Notification Service (SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication. SNS provides topics for high-throughput, push-based, many-to-many messaging.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/sns/"
      },
      {
        name: "Amazon API Gateway",
        description: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. API Gateway handles all the tasks involved in accepting and processing thousands of concurrent API calls.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/apigateway/"
      }
    ]
  }
];