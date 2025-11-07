import { Card } from "@/components/ui/Card";
import { Table, TBody, TD, TH, THead, TR } from "@/components/ui/Table";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { UploadWidget } from "@/components/dashboard/UploadWidget";
import { FEATURE_CARDS } from "@/lib/constants";

const recentUploads = [
  { name: "customer-retention.csv", status: "Processed", size: "2.3 MB" },
  { name: "regional-sales.xlsx", status: "Processing", size: "4.1 MB" },
  { name: "feedback.json", status: "Processed", size: "900 KB" },
];

const sentimentBreakdown = [
  { label: "Positive", value: 62 },
  { label: "Neutral", value: 28 },
  { label: "Negative", value: 10 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {FEATURE_CARDS.map((feature) => (
          <Card key={feature.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">{feature.title}</h2>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Weekly Upload Volume</h3>
            <span className="text-xs text-gray-500">Last 6 weeks</span>
          </div>
          <LineChart data={[5, 8, 6, 12, 9, 14]} labels={["W1", "W2", "W3", "W4", "W5", "W6"]} />
        </Card>
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold">Sentiment Breakdown</h3>
          <PieChart data={sentimentBreakdown} />
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <h3 className="mb-4 text-lg font-semibold">Recent Uploads</h3>
          <Table>
            <THead>
              <TR>
                <TH>File</TH>
                <TH>Status</TH>
                <TH>Size</TH>
              </TR>
            </THead>
            <TBody>
              {recentUploads.map((item) => (
                <TR key={item.name}>
                  <TD>{item.name}</TD>
                  <TD>{item.status}</TD>
                  <TD>{item.size}</TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </Card>
        <UploadWidget />
      </div>
    </div>
  );
}

