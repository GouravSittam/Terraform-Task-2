import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Cloud, Shield, Server } from "lucide-react"
import { SecuritySection } from "@/components/security-section"

export default function TerraformPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terraform AWS Infrastructure</h1>
              <p className="text-gray-600 mt-1">Secure Ubuntu EC2 Instance Deployment</p>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-lg font-semibold text-blue-600">Gourav</p>
                <span className="text-gray-400">|</span>
                <p className="text-sm text-gray-500">Registration No: 12203224</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              <Button size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Overview */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-6 h-6 text-blue-600" />
                Project Overview
              </CardTitle>
              <CardDescription>
                Infrastructure as Code (IaC) project using Terraform to deploy a secure Ubuntu EC2 instance on AWS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Server className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">EC2 Instance</h3>
                    <p className="text-sm text-gray-600">Ubuntu 22.04 LTS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-600" />
                  <div>
                    <h3 className="font-semibold">Security Groups</h3>
                    <p className="text-sm text-gray-600">SSH & HTTPS Access</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">AWS Region</h3>
                    <p className="text-sm text-gray-600">us-east-1</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personal Information */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  G
                </div>
                Student Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Name</h3>
                  <p className="text-lg text-blue-600 font-medium">Gourav</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Registration Number</h3>
                  <p className="text-lg text-blue-600 font-medium">12203224</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {["Terraform", "AWS EC2", "Ubuntu 22.04", "Security Groups", "VPC", "SSH", "HTTPS"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="code" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="code">Terraform Code</TabsTrigger>
            <TabsTrigger value="execution">Execution</TabsTrigger>
            <TabsTrigger value="aws-console">AWS Console</TabsTrigger>
            <TabsTrigger value="cleanup">Cleanup</TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Terraform Configuration</CardTitle>
                <CardDescription>Complete infrastructure definition for secure EC2 deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{`# AWS Provider Configuration (Secure Version)
provider "aws" {
  region = "us-east-1"
  # Credentials are configured via:
  # 1. AWS CLI: aws configure
  # 2. Environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
  # 3. IAM roles (recommended for production)
  # 4. AWS credentials file (~/.aws/credentials)
}

# Get Latest Ubuntu AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
  filter {
    name = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"] # Canonical
}

# Use default VPC
data "aws_vpc" "default" {
  default = true
}

# EC2 Instance Resource
resource "aws_instance" "Sample_demo" {
  count = 1
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name = var.key_name
  vpc_security_group_ids = [aws_security_group.allow_tls.id]
  associate_public_ip_address = true
  
  tags = {
    Name = "EC2_Without_AMI"
    Project = "Terraform-Demo"
    Owner = "Gourav"
  }
}

# Security Group Configuration
resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = data.aws_vpc.default.id

  tags = {
    Name = "allow_tls"
  }
}

# Ingress Rule for HTTPS (Port 443)
resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = data.aws_vpc.default.cidr_block
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}

# Ingress Rule for SSH (Port 22)
resource "aws_vpc_security_group_ingress_rule" "allow_ssh_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0" # Restrict this in production
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}

# Egress Rule - Allow all outbound traffic
resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}

# Variable for Key Pair
variable "key_name" {
  description = "Name of the AWS key pair for SSH access"
  type        = string
  default     = "your-key-pair-name" # Replace with your actual key pair
}

# Output the instance public IP
output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.Sample_demo[0].public_ip
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <SecuritySection />
          </TabsContent>

          <TabsContent value="execution" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Terraform Init</CardTitle>
                  <CardDescription>Initialize Terraform working directory</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/terraform-init.png"
                    alt="Terraform initialization output"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Terraform Plan</CardTitle>
                  <CardDescription>Review infrastructure changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/terraform-plan.png"
                    alt="Terraform plan output"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Terraform Apply</CardTitle>
                  <CardDescription>Deploy infrastructure to AWS</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/terraform-apply.png"
                    alt="Terraform apply output"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Validation Success</CardTitle>
                  <CardDescription>Configuration validated successfully</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/terraform-validate.png"
                    alt="Terraform validation output"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="aws-console" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>EC2 Instances Dashboard</CardTitle>
                  <CardDescription>AWS Console showing deployed instances</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/aws-console.png"
                    alt="AWS EC2 Console Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instance Details</CardTitle>
                  <CardDescription>Detailed view of the deployed EC2 instance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/aws-instance-details.png"
                    alt="EC2 Instance Details"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cleanup" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Terraform Destroy</CardTitle>
                  <CardDescription>Clean up AWS resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/terraform-destroy.png"
                    alt="Terraform destroy output"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Destroy Confirmation</CardTitle>
                  <CardDescription>Resources successfully destroyed</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/terraform-destroy-confirm.png"
                    alt="Terraform destroy confirmation"
                    width={600}
                    height={400}
                    className="rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Key Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Automated AMI Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dynamically fetches the latest Ubuntu 22.04 LTS AMI from Canonical</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configured for SSH (port 22) and HTTPS (port 443) access with proper ingress/egress rules
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Default VPC Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Utilizes AWS default VPC for simplified networking configuration</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Public IP Assignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Automatically assigns public IP for internet accessibility</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SSH Key Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Configurable SSH key pair for secure instance access</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resource Tagging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Proper resource tagging for organization and cost management</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Project Workflow */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Workflow</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Initialize Terraform</h3>
                    <p className="text-gray-600">
                      Run <code className="bg-gray-100 px-2 py-1 rounded">terraform init</code> to initialize the
                      working directory
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Validate Configuration</h3>
                    <p className="text-gray-600">
                      Run <code className="bg-gray-100 px-2 py-1 rounded">terraform validate</code> to check syntax
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Plan Infrastructure</h3>
                    <p className="text-gray-600">
                      Run <code className="bg-gray-100 px-2 py-1 rounded">terraform plan</code> to review changes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">Deploy Infrastructure</h3>
                    <p className="text-gray-600">
                      Run <code className="bg-gray-100 px-2 py-1 rounded">terraform apply</code> to create resources
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold">Clean Up</h3>
                    <p className="text-gray-600">
                      Run <code className="bg-gray-100 px-2 py-1 rounded">terraform destroy</code> to remove resources
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="font-semibold text-gray-800 mb-2">Gourav - Registration No: 12203224</p>
            <p>© 2024 Terraform AWS Infrastructure Project. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
