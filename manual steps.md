https://medium.com/geekculture/creating-and-deploying-express-app-to-lambda-811463ce7be2

## Create S3 bucket for SAM deployment
aws s3api create-bucket --bucket cormie-com-deployment-bucket --region eu-north-1 --create-bucket-configuration LocationConstraint=eu-north-1

## Create ECR repo
aws ecr create-repository --repository-name cormie-com  



aws ecr create-repository --repository-name not-yet-cormie-com



DOCKER INSTALL
https://stackoverflow.com/questions/40523307/brew-install-docker-does-not-include-docker-engine
Please try running

brew install docker
This will install the Docker engine, which will require Docker-Machine (+ VirtualBox) to run on the Mac.

If you want to install the newer Docker for Mac, which does not require virtualbox, you can install that through Homebrew's Cask:

brew install --cask docker 
open /Applications/Docker.app



aws s3api create-bucket --bucket not-yet-cormie-com-deployment-bucket --region eu-north-1 --create-bucket-configuration LocationConstraint=eu-north-1


export AWS_ACCESS_KEY_ID="ASIA4B2QJ27TF2HMAL44"
export AWS_SECRET_ACCESS_KEY="JDF5tOQH1R0SBG1FiuRhtA/8LTeOsTVGldvkj58C"
export AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjEDgaCmV1LW5vcnRoLTEiSDBGAiEA6b+LyEi7OFb8UYsDp/yZhLPJ4ALU/eZ+WxHKpDnt/3kCIQDdpc+iudFZiJyqDISMvCTfsBgjuVqQ6A5v+jZy7y1KTSqGAwiS//////////8BEAMaDDgyODU2MDIzNDQ3MCIM01zLTflXvosGXcgVKtoCfk87TjGvcyL5r1YwjdD/Mx9jidImY5b6eM9881/j6mZuE01LudzhJnVS4/o+oxQyouIGcRtFOf7gIFKyNFmBDqX1g6lmRS/e3f3JS/fCAr4fLa2ohjnXbR4yZRB0/2mOpB2DR71aGgRNH9GkJ5fLNtvWtE4LZeMHPfSBmjopANVGpWNtlv5wti7SLiLyGVQ4Dp5Y5TmiK/z+eYfaSY32fVpazneFKer8j+FiwVIXgkqMQMgxYjEp1lycgZkd+W4AHRCdHvNzKKPj5bUtqY41qxmaykKDJBLNf4YKSsG6sVnCGL63WVKdS1GnpvsXSyklYSVLCUvwdc24+GHA+fQF/G2jxXfAJOM9HAb+x/5T9S+R1pdg2CsHZ1lNDLtJWDOnO7jn2XlsPoz01EKslxqqse6lbv5sA3gqRH5iCzBJoCEKZyxr7K9CXYPBwPGONqqlRcEvImDHQchTrjCR6Y2rBjqmAadF4iOdES214HiGaiW3Idlk6AOajOmpwROA1T0L7sVHLBDsi36XIKgIaYn0ulT4Aa7EL71Bp9bjTEMYNhCHJQwnAFKCr28xVLcm6tT+qKqWROleIDlGbMjKnJxbpYdOm+WN6CqwqanYB5qqwa/kNCenqgUZMvIxvR7ApFE/LwuyLcOFo1HKyhaNeYOCdWlG9xkC94tkn3UsSkvHq2e/SN30o0NIK3Y="

aws configure sso