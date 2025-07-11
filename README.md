# Terraform AWS Infrastructure Project

**Author:** Gourav  
**Registration No:** 12203224

## Project Overview

This project demonstrates Infrastructure as Code (IaC) using Terraform to deploy a secure Ubuntu EC2 instance on AWS with proper security groups for SSH and HTTPS access.

## 🚀 Next.js Application

This project also includes a modern Next.js web application showcasing the Terraform infrastructure setup with a beautiful UI built using:

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful component library

### Live Demo

🌐 **Deployed on Vercel:** [Your App URL will be here after deployment]

### Quick Start

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd Terraform-Task-2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Deployment on Vercel

#### Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

#### Deployment Steps

1. **Connect your repository to Vercel:**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository

2. **Configure deployment settings:**

   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (if your Next.js app is in the root)
   - **Build Command:** `npm run build` (auto-configured)
   - **Output Directory:** `.next` (auto-configured)
   - **Install Command:** `npm install` (auto-configured)

3. **Environment Variables (if needed):**

   - Add any required environment variables in the Vercel dashboard
   - Use the `.env.example` file as a reference

4. **Deploy:**
   - Click "Deploy" and wait for the build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

#### Automatic Deployments

- Every push to your main branch will trigger a new deployment
- Pull requests will create preview deployments

### Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui components
│   └── security-section.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
├── styles/              # Global styles
├── vercel.json          # Vercel configuration
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🔒 Security Notice

This repository does **NOT** contain any AWS credentials or sensitive information. All credentials must be configured separately using one of the following methods:

### Recommended Credential Configuration Methods:

1. **AWS CLI Configuration (Recommended for development):**

   ```bash
   aws configure
   ```

2. **Environment Variables:**

   ```bash
   export AWS_ACCESS_KEY_ID=your_access_key
   export AWS_SECRET_ACCESS_KEY=your_secret_key
   export AWS_DEFAULT_REGION=us-east-1
   ```

3. **AWS Credentials File:**

   ```
   ~/.aws/credentials
   [default]
   aws_access_key_id = your_access_key
   aws_secret_access_key = your_secret_key
   ```

4. **IAM Roles (Recommended for production):**
   - Use IAM roles when running on EC2 instances
   - No credentials needed in code

## 🚀 Quick Start

1. **Prerequisites:**

   - Install [Terraform](https://www.terraform.io/downloads.html)
   - Install [AWS CLI](https://aws.amazon.com/cli/)
   - Configure AWS credentials (see above)

2. **Deploy Infrastructure:**

   ```bash
   # Initialize Terraform
   terraform init

   # Validate configuration
   terraform validate

   # Plan deployment
   terraform plan

   # Apply changes
   terraform apply
   ```

3. **Clean Up:**
   ```bash
   terraform destroy
   ```

## 📋 Project Structure

```
├── main.tf              # Main Terraform configuration
├── variables.tf         # Variable definitions
├── outputs.tf          # Output definitions
├── .gitignore          # Git ignore file
└── README.md           # This file
```

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
