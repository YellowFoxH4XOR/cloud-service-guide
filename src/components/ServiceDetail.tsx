import { ExternalLink, Award, Building2, Layers } from 'lucide-react';
import { AWSService } from '@/data/awsServices';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceDetailProps {
  service: AWSService | null;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
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
    // Mermaid diagram based on service type
    if (serviceName.includes('EC2')) {
      return `
        graph TB
          User[User] --> LB[Load Balancer]
          LB --> EC2A[EC2 Instance A]
          LB --> EC2B[EC2 Instance B]
          EC2A --> RDS[(RDS Database)]
          EC2B --> RDS
          EC2A --> S3[S3 Storage]
          EC2B --> S3
      `;
    } else if (serviceName.includes('Lambda')) {
      return `
        graph LR
          Event[Event Source] --> Lambda[AWS Lambda]
          Lambda --> DDB[(DynamoDB)]
          Lambda --> S3[S3 Storage]
          Lambda --> CW[CloudWatch Logs]
      `;
    } else if (serviceName.includes('S3')) {
      return `
        graph TB
          App[Application] --> S3[S3 Bucket]
          Web[Web Browser] --> CF[CloudFront CDN]
          CF --> S3
          S3 --> Lifecycle[Lifecycle Rules]
          Lifecycle --> Glacier[S3 Glacier]
      `;
    } else if (serviceName.includes('RDS')) {
      return `
        graph TB
          App[Application] --> RDS[RDS Instance]
          RDS --> Standby[Standby Instance]
          RDS --> Snapshot[Automated Snapshots]
          RDS --> Logs[CloudWatch Logs]
      `;
    } else if (serviceName.includes('VPC')) {
      return `
        graph TB
          Internet[Internet Gateway] --> VPC[VPC]
          VPC --> PubSub[Public Subnet]
          VPC --> PrivSub[Private Subnet]
          PubSub --> Web[Web Servers]
          PrivSub --> DB[Database Servers]
          PrivSub --> NAT[NAT Gateway]
          NAT --> Internet
      `;
    }
    
    return `
      graph TB
        User[User] --> Service[${serviceName}]
        Service --> Output[Output]
        Service --> Monitor[CloudWatch]
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
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-center py-8 text-muted-foreground">
                <Building2 className="h-12 w-12 mx-auto mb-2" />
                <p>Architecture diagram for {service.name}</p>
                <p className="text-xs mt-1">Mermaid diagram integration coming soon</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              This diagram shows a typical architecture pattern for {service.name} 
              and how it integrates with other AWS services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}