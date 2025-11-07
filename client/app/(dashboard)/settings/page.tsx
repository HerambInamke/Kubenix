"use client";

import { useTheme } from "@/hooks/useTheme";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  const { theme, toggle } = useTheme();

  return (
    <div className="space-y-6">
      <Card className="space-y-3">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-600">
          Manage your experience – toggle the dashboard theme and update personalization options.
        </p>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-gray-600">Switch between light and dark appearance.</p>
        </div>
        <Button variant="secondary" onClick={toggle}>
          Switch to {theme === "light" ? "dark" : "light"} mode
        </Button>
      </Card>
    </div>
  );
}

