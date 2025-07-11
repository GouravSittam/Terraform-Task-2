# Terraform AWS Infrastructure Project

**Author:** Gourav  
**Registration No:** 12203224

## Project Overview

This project demonstrates Infrastructure as Code (IaC) using Terraform to deploy a secure Ubuntu EC2 instance on AWS with proper security groups for SSH and HTTPS access.

## 🔒 Security Notice

This repository does **NOT** contain any AWS credentials or sensitive information. All credentials must be configured separately using one of the following methods:

### Recommended Credential Configuration Methods:

1. **AWS CLI Configuration (Recommended for development):**
   \`\`\`bash
   aws configure
   \`\`\`


2. **Environment Variables:**
   \`\`\`bash
   export AWS_ACCESS_KEY_ID=your_access_key
   export AWS_SECRET_ACCESS_KEY=your_secret_key
   export AWS_DEFAULT_REGION=us-east-1
   \`\`\`

3. **AWS Credentials File:**
   \`\`\`
   ~/.aws/credentials
   [default]
   aws_access_key_id = your_access_key
   aws_secret_access_key = your_secret_key
   \`\`\`

4. **IAM Roles (Recommended for production):**
   - Use IAM roles when running on EC2 instances
   - No credentials needed in code

## 🚀 Quick Start

1. **Prerequisites:**
   - Install [Terraform](https://www.terraform.io/downloads.html)
   - Install [AWS CLI](https://aws.amazon.com/cli/)
   - Configure AWS credentials (see above)

2. **Deploy Infrastructure:**
   \`\`\`bash
   # Initialize Terraform
   terraform init
   
   # Validate configuration
   terraform validate
   
   # Plan deployment
   terraform plan
   
   # Apply changes
   terraform apply
   \`\`\`

3. **Clean Up:**
   \`\`\`bash
   terraform destroy
   \`\`\`

## 📋 Project Structure

\`\`\`
├── main.tf              # Main Terraform configuration
├── variables.tf         # Variable definitions
├── outputs.tf          # Output definitions
├── .gitignore          # Git ignore file
└── README.md           # This file
\`\`\`

## 🛡️ Security Features

- **No hardcoded credentials** in source code
- **Security groups** with minimal required access
- **SSH key pair** authentication
- **Public IP** assignment for accessibility
- **Resource tagging** for organization

## 📊 Resources Created

- 1x EC2 Instance (t2.micro)
- 1x Security Group with SSH (22) and HTTPS (443) access
- Security group rules for ingress and egress traffic

## ⚠️ Important Notes

- Replace `your-key-pair-name` in variables with your actual AWS key pair
- Restrict SSH access (`0.0.0.0/0`) to your IP in production
- Always run `terraform destroy` to avoid unnecessary AWS charges
- Never commit `.tfvars` files or any files containing credentials

## 🎓 Academic Project

This project was created as part of academic coursework to demonstrate:
- Infrastructure as Code principles
- AWS cloud services
- Terraform automation
- Security best practices
- Version control with Git

---

**⚠️ Security Reminder:** This code is safe to commit to public repositories as it contains no sensitive information.
