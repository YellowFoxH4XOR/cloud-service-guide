import { ExternalLink, Award, Building2, Layers, CheckCircle2 } from 'lucide-react';
import { AWSService } from '@/data/awsServices';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MermaidDiagram } from './MermaidDiagram';
import { useServiceCompletions } from '@/hooks/useServiceCompletions';

interface ServiceDetailProps {
  service: AWSService | null;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const { isCompleted, toggleCompletion } = useServiceCompletions();
  if (!service) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-surface">
        <div className="text-center max-w-md">
          <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Select an AWS Service
          </h3>
          <p className="text-muted-foreground">
            Choose a service from the sidebar to view detailed information, 
            architecture diagrams, and official documentation.
          </p>
        </div>
      </div>
    );
  }

  const getServiceIcon = (serviceName: string) => {
    // Simple icon mapping based on service type
    if (serviceName.includes('EC2') || serviceName.includes('Lambda')) {
      return '🖥️';
    } else if (serviceName.includes('S3') || serviceName.includes('EBS')) {
      return '💾';
    } else if (serviceName.includes('RDS') || serviceName.includes('DynamoDB')) {
      return '🗄️';
    } else if (serviceName.includes('VPC') || serviceName.includes('Route')) {
      return '🌐';
    } else if (serviceName.includes('IAM') || serviceName.includes('KMS')) {
      return '🔐';
    } else if (serviceName.includes('CloudWatch')) {
      return '📊';
    } else if (serviceName.includes('SQS') || serviceName.includes('SNS')) {
      return '📨';
    }
    return '☁️';
  };

  const generateArchitectureDiagram = (serviceName: string) => {
    if (serviceName.includes('EC2')) {
      return `
        graph TB
          Users[👥 Users] --> ALB[Application Load Balancer]
          ALB --> ASG[Auto Scaling Group]
          ASG --> EC2A[EC2 Instance A]
          ASG --> EC2B[EC2 Instance B]
          ASG --> EC2C[EC2 Instance N...]
          EC2A --> RDS[(🗄️ RDS Multi-AZ)]
          EC2B --> RDS
          EC2C --> RDS
          EC2A --> S3[📦 S3 Storage]
          EC2B --> S3
          EC2C --> S3
          EC2A --> CW[📊 CloudWatch]
          EC2B --> CW
          EC2C --> CW
          RDS --> BackupS3[💾 S3 Backup]
      `;
    } else if (serviceName.includes('Lambda')) {
      return `
        graph TB
          API[🌐 API Gateway] --> Lambda[⚡ Lambda Function]
          S3Event[📦 S3 Events] --> Lambda
          Schedule[⏰ EventBridge] --> Lambda
          Lambda --> DDB[(🗃️ DynamoDB)]
          Lambda --> S3[📦 S3 Storage]
          Lambda --> SNS[📨 SNS]
          Lambda --> CW[📊 CloudWatch Logs]
          Lambda --> X[🔗 External APIs]
          DDB --> Stream[🌊 DDB Stream]
          Stream --> Lambda2[⚡ Stream Processor]
      `;
    } else if (serviceName.includes('S3')) {
      return `
        graph TB
          Users[👥 Users] --> CF[🌍 CloudFront CDN]
          CF --> S3[📦 S3 Bucket]
          Apps[📱 Applications] --> S3
          S3 --> IA[❄️ S3-IA]
          IA --> Glacier[🧊 S3 Glacier]
          S3 --> Replication[🔄 Cross-Region Replication]
          S3 --> Versioning[📝 Versioning]
          S3 --> Lifecycle[♻️ Lifecycle Rules]
          S3 --> Analytics[📈 S3 Analytics]
      `;
    } else if (serviceName.includes('RDS')) {
      return `
        graph TB
          Apps[📱 Applications] --> RDS[🗄️ RDS Primary]
          RDS --> Standby[🔄 Multi-AZ Standby]
          RDS --> ReadReplica[📖 Read Replicas]
          RDS --> Backup[💾 Automated Backup]
          RDS --> Snapshot[📸 Manual Snapshots]
          RDS --> CW[📊 CloudWatch Metrics]
          RDS --> ParamGroup[⚙️ Parameter Groups]
          Backup --> S3[📦 S3 Storage]
          Snapshot --> S3
      `;
    } else if (serviceName.includes('VPC')) {
      return `
        graph TB
          Internet[🌐 Internet Gateway] --> VPC[🏠 VPC 10.0.0.0/16]
          VPC --> PubSub1[🌍 Public Subnet A]
          VPC --> PubSub2[🌍 Public Subnet B]
          VPC --> PrivSub1[🔒 Private Subnet A]
          VPC --> PrivSub2[🔒 Private Subnet B]
          PubSub1 --> LB[⚖️ Load Balancer]
          PubSub2 --> LB
          LB --> PrivSub1
          LB --> PrivSub2
          PrivSub1 --> NAT1[🚪 NAT Gateway A]
          PrivSub2 --> NAT2[🚪 NAT Gateway B]
          NAT1 --> Internet
          NAT2 --> Internet
      `;
    } else if (serviceName.includes('DynamoDB')) {
      return `
        graph TB
          Apps[📱 Applications] --> DDB[🗃️ DynamoDB Table]
          DDB --> GSI[🔍 Global Secondary Index]
          DDB --> LSI[📋 Local Secondary Index]
          DDB --> Stream[🌊 DynamoDB Stream]
          Stream --> Lambda[⚡ Lambda Trigger]
          DDB --> DAX[⚡ DynamoDB Accelerator]
          DDB --> Backup[💾 Point-in-Time Recovery]
          DDB --> CrossRegion[🌍 Global Tables]
      `;
    } else if (serviceName.includes('CloudWatch')) {
      return `
        graph TB
          EC2[🖥️ EC2] --> CW[📊 CloudWatch]
          RDS[🗄️ RDS] --> CW
          Lambda[⚡ Lambda] --> CW
          S3[📦 S3] --> CW
          CW --> Metrics[📈 Custom Metrics]
          CW --> Logs[📝 CloudWatch Logs]
          CW --> Alarms[🚨 CloudWatch Alarms]
          Alarms --> SNS[📨 SNS Notifications]
          Alarms --> ASG[📏 Auto Scaling]
          CW --> Dashboard[📱 CloudWatch Dashboard]
      `;
    } else if (serviceName.includes('IAM')) {
      return `
        graph TB
          Users[👥 IAM Users] --> Roles[🎭 IAM Roles]
          Users --> Groups[👥 IAM Groups]
          Groups --> Policies[📜 IAM Policies]
          Roles --> Policies
          Policies --> Resources[🔐 AWS Resources]
          EC2[🖥️ EC2] --> InstanceProfile[🏷️ Instance Profile]
          InstanceProfile --> Roles
          Federation[🔗 Identity Federation] --> Roles
      `;
    }
    
    return `
      graph TB
        Users[👥 Users] --> Service[☁️ ${serviceName}]
        Service --> Output[📤 Output]
        Service --> Monitor[📊 CloudWatch]
        Service --> Logs[📝 Logs]
    `;
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-surface">
      <div className="max-w-4xl mx-auto p-6">
        {/* Service Header */}
        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">{getServiceIcon(service.name)}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">
                  {service.name}
                </h1>
                {service.isExamCritical && (
                  <Badge variant="exam">
                    <Award className="h-3 w-3 mr-1" />
                    SAA-C03 Critical
                  </Badge>
                )}
                <Button
                  size="sm"
                  variant={isCompleted(service.name) ? "default" : "outline"}
                  onClick={() => toggleCompletion(service.name)}
                  className="ml-auto"
                >
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  {isCompleted(service.name) ? "Completed" : "Mark Complete"}
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="hover:bg-primary/10"
                >
                  <a 
                    href={service.officialDocsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Official Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Service Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {service.description}
            </p>
          </CardContent>
        </Card>

        {/* Architecture Diagram */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Typical Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg p-6">
              <MermaidDiagram 
                chart={generateArchitectureDiagram(service.name)}
                className="w-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              This diagram shows a typical architecture pattern for {service.name} 
              and how it integrates with other AWS services in a production environment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}