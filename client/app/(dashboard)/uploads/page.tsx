import { FileUploader } from "@/components/FileUploader";
import { Card } from "@/components/ui/Card";

export default function UploadsPage() {
  return (
    <div className="space-y-6">
      <Card className="space-y-3">
        <h1 className="text-2xl font-semibold">Upload Data</h1>
        <p className="text-sm text-gray-600">
          Upload CSV, JSON, or plain text files. We will process your data and make it available in
          the insights dashboard instantly.
        </p>
      </Card>
      <FileUploader />
    </div>
  );
}

