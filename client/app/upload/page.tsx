import { FileUploader } from "@/components/FileUploader";

export default function UploadPage() {
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Upload Data</h1>
      <FileUploader />
    </div>
  );
}

