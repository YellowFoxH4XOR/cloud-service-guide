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
        description: "Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity in the cloud. It allows you to launch virtual servers, configure security and networking, and manage storage. EC2 offers various instance types optimized for different use cases, from general purpose to memory-optimized and high-performance computing.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/ec2/"
      },
      {
        name: "AWS Lambda",
        description: "AWS Lambda is a serverless compute service that runs your code in response to events without provisioning or managing servers. You pay only for the compute time consumed. Lambda automatically scales your application by running code in response to triggers from other AWS services.",
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
        description: "Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. S3 provides various storage classes for different use cases and access patterns, with 99.999999999% (11 9's) durability.",
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
        description: "Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale relational databases in the cloud. RDS provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups.",
        isExamCritical: true,
        officialDocsUrl: "https://docs.aws.amazon.com/rds/"
      },
      {
        name: "Amazon DynamoDB",
        description: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB offers built-in security, backup and restore, and in-memory caching for applications that need single-digit millisecond latency.",
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