https://medium.com/geekculture/creating-and-deploying-express-app-to-lambda-811463ce7be2

## Create S3 bucket for SAM deployment
aws s3api create-bucket --bucket cormie-com-deployment-bucket --region eu-north-1 --create-bucket-configuration LocationConstraint=eu-north-1

## Create ECR repo
aws ecr create-repository --repository-name cormie-com

