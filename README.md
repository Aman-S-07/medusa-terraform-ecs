# Medusa Headless Commerce Backend on AWS ECS Fargate using Terraform

This project deploys the Medusa open-source headless commerce backend on AWS ECS Fargate using Infrastructure as Code (IaC) with Terraform. It also includes a GitHub Actions-based CI/CD pipeline for automated Docker image build, push, and deployment.

---

## Features

- AWS VPC, Subnet, Internet Gateway, and Route Table configured with Terraform  
- ECS Cluster and Fargate Service to run Medusa backend containers  
- ECR repository for storing Docker images with scan on push enabled  
- IAM Roles and policies for ECS Task Execution  
- Security Group allowing inbound traffic on port 9000  
- Modular Terraform configuration with variables for customization  
- GitHub Actions workflow for automated CI/CD pipeline  

---

## Prerequisites

- AWS CLI configured with appropriate permissions  
- Terraform installed (recommended v1.3 or above)  
- Docker installed and running locally  
- AWS account with ECS, ECR, and IAM permissions  
- GitHub repository with Medusa backend source code and Terraform configs  

---

## Project Structure

medusa-terraform-ecs/
│
├── medusa-app/ # Medusa backend source code & Dockerfile
├── terraform/ # Terraform infrastructure code
│ ├── main.tf # Main Terraform config
│ ├── variables.tf # Terraform variables
│ ├── outputs.tf # Terraform outputs
│ └── provider.tf # AWS provider configuration
└── .github/workflows/
└── deploy.yml # GitHub Actions workflow for CI/CD


---

## Step-by-step Guide

### 1. Clone the repository and prepare the Medusa backend

```bash
git clone https://github.com/yourusername/medusa-terraform-ecs.git
cd medusa-terraform-ecs/medusa-app
# (Optional) Build and run Docker image locally
docker build -t medusa-backend .
docker run -p 9000:9000 medusa-backend
This allows you to test the Medusa backend locally before deploying.
```
## 2. Deploy infrastructure using Terraform
```bash
cd ../terraform
terraform init
terraform apply
```
This will create your VPC, ECS cluster, ECR repository, task definition, security groups, and Fargate service.

## 3. Build and push Docker image to AWS ECR
Authenticate Docker with AWS ECR:
```bash
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<your-region>.amazonaws.com
Build and tag your Docker image:
docker build -t medusa-backend .
docker tag medusa-backend:latest <aws_account_id>.dkr.ecr.<your-region>.amazonaws.com/<repo-name>:latest
```
## Push the image to ECR:
```bash
docker push <aws_account_id>.dkr.ecr.<your-region>.amazonaws.com/<repo-name>:latest
```
## 4. Continuous Deployment with GitHub Actions
```bash
The GitHub Actions workflow at .github/workflows/deploy.yml automatically builds the Docker image, pushes it to ECR, and updates the ECS service on each code push.

Add your AWS credentials as GitHub repository secrets: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.

Every push to the repository triggers the deployment pipeline automatically.
```

## Important Notes
```bash
The Medusa backend listens on port 9000.

Customize Terraform variables in variables.tf (like region, project name, etc.) to suit your setup.

Modify the Dockerfile in medusa-app/ as needed for your project requirements.
```
