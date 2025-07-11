import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export function SecuritySection() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-600" />
          Security Best Practices
        </CardTitle>
        <CardDescription>
          How to securely manage AWS credentials and avoid exposing sensitive information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800">Security Warning</AlertTitle>
          <AlertDescription className="text-red-700">
            Never commit AWS credentials directly in your code. This version removes all hardcoded credentials.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Recommended Methods
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>AWS CLI Configuration:</strong>
                  <code className="block bg-gray-100 p-1 rounded mt-1">aws configure</code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>Environment Variables:</strong>
                  <code className="block bg-gray-100 p-1 rounded mt-1">
                    export AWS_ACCESS_KEY_ID=your_key
                    <br />
                    export AWS_SECRET_ACCESS_KEY=your_secret
                  </code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>IAM Roles:</strong> Best for production environments
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>AWS Credentials File:</strong> ~/.aws/credentials
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              What to Avoid
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Hardcoding credentials in source code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Committing .env files with secrets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Sharing credentials in chat/email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Using root account credentials</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">Setup Instructions</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>
              Install AWS CLI: <code className="bg-white px-1 rounded">pip install awscli</code>
            </li>
            <li>
              Configure credentials: <code className="bg-white px-1 rounded">aws configure</code>
            </li>
            <li>
              Verify setup: <code className="bg-white px-1 rounded">aws sts get-caller-identity</code>
            </li>
            <li>
              Run Terraform: <code className="bg-white px-1 rounded">terraform init && terraform plan</code>
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
