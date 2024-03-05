# create an s3 bucket
aws s3 mb s3://ub-code-sam

# package cloudformation
aws cloudformation package --s3-bucket ub-code-sam --template-file template.yaml --output-template-file gen/template-generated.yaml
sam package --s3-bucket ub-code-sam --template-file template.yaml --output-template-file gen/template-generated.yaml

# deploy
aws cloudformation deploy --template-file C:\Users\uBeom\Documents\ub\task_a\task_a_sam\gen\template-generated.yaml --stack-name hello-world-sam --capabilities CAPABILITY_IAM
sam deploy --template-file C:\Users\uBeom\Documents\ub\task_a\task_a_sam\gen\template-generated.yaml --stack-name hello-world-sam --capabilities CAPABILITY_IAM

