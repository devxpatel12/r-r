"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  BarChart3,
  Bell,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  ClipboardCheck,
  FileText,
  Gift,
  GitPullRequestArrow,
  House,
  LogOut,
  Settings2,
  TrendingUp,
  User,
  UserPlus,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";

type SectionKey =
  | "dashboard"
  | "programs"
  | "cycle"
  | "nominations"
  | "approvals"
  | "voting"
  | "publishing"
  | "employee"
  | "notifications"
  | "reports";

const sectionTitles: Record<SectionKey, string> = {
  dashboard: "Rewards & Recognition Dashboard",
  programs: "Program Configuration (All 4 Program Types)",
  cycle: "Cycle Initiation Configuration",
  nominations: "Nomination Workspace (JL3+ / Manager)",
  approvals: "L1 + BU Head Approval Flow",
  voting: "Executive Committee Voting Flow",
  publishing: "Award Consolidation & Publishing",
  employee: "Employee View: Awards, Certificate, LinkedIn",
  notifications: "Communication & Mailbox Configuration",
  reports: "Dashboards, Geo Reports & Audit Logs",
};

const kpiCards = [
  { label: "Active Programs", value: "18", icon: Award },
  { label: "Open Nominations", value: "1,284", icon: ClipboardCheck },
  { label: "Pending L1/BU", value: "213", icon: GitPullRequestArrow },
  { label: "Pending EC Votes", value: "92", icon: Vote },
  { label: "Budget Utilization", value: "74%", icon: CircleDollarSign },
];

const sidebarPlatformItems = [
  { label: "Home", icon: House },
  { label: "Profile", icon: User },
  { label: "Leave", icon: CalendarDays },
  { label: "Attendance", icon: Clock3 },
  { label: "Performance", icon: TrendingUp },
  { label: "Separation", icon: LogOut },
  { label: "Requests", icon: GitPullRequestArrow, active: true },
  { label: "Onboarding", icon: UserPlus },
  { label: "Confirmation", icon: ShieldCheck },
  { label: "Demands", icon: Gift },
  { label: "Reports", icon: FileText },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings2 },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("dashboard");
  const [roleView, setRoleView] = useState("admin");
  const headerText = sectionTitles[activeSection];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-100 via-slate-100 to-slate-200 text-slate-900">
      <div className="flex min-h-screen w-full">
        <aside className="hidden w-80 border-r border-[#12335D] bg-linear-to-b from-[#163E6E] via-[#0B2B58] to-[#031A3A] text-white md:block">
          <div className="border-b border-white/10 px-5 py-6">
            <div className="mb-1 flex items-center gap-3">
              <div className="rounded-lg bg-[#f96332] p-2 text-white">
                <Award className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-semibold tracking-tight">Apexon</h1>
            </div>
          </div>

          <div className="px-4 py-5">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-white/65">
              HR Platform
            </p>
            <nav className="space-y-1">
              {sidebarPlatformItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                    item.active
                      ? "bg-white/18 text-white shadow-sm"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                  type="button"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <section className="flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8">
          <header className="mb-6 flex min-h-16 flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Welcome back, Surendra</p>
              <h2 className="text-xl font-semibold tracking-tight">
                Rewards & Recognition Workspace
              </h2>
              <p className="max-w-[780px] truncate text-sm text-slate-600">
                {headerText}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Select
                value={roleView}
                onValueChange={(value) => {
                  if (value) setRoleView(value);
                }}
              >
                <SelectTrigger className="w-[170px] bg-white">
                  <SelectValue placeholder="Role view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="super-admin">Super Admin</SelectItem>
                  <SelectItem value="hrbp">Location HRBP</SelectItem>
                  <SelectItem value="bu-head">BU Head</SelectItem>
                  <SelectItem value="ec">Executive Committee</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Avatar>
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="mb-6 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            {kpiCards.map((item) => (
              <Card
                key={item.label}
                className="border-slate-200 bg-white/95 shadow-sm backdrop-blur"
              >
                <CardContent className="pt-6">
                  <div className="mb-2 flex items-center justify-between text-slate-500">
                    <span className="text-xs">{item.label}</span>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="text-xl font-semibold">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs
            value={activeSection}
            onValueChange={(value) => setActiveSection(value as SectionKey)}
            className="mb-6"
          >
            <TabsList className="sticky top-0 z-10 flex h-auto w-full flex-nowrap justify-start gap-2 overflow-x-auto rounded-xl border border-slate-200 bg-white/95 p-2 shadow-sm backdrop-blur">
              <TabsTrigger
                value="dashboard"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Programs
              </TabsTrigger>
              <TabsTrigger
                value="cycle"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Cycle
              </TabsTrigger>
              <TabsTrigger
                value="nominations"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Nominations
              </TabsTrigger>
              <TabsTrigger
                value="approvals"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Approvals
              </TabsTrigger>
              <TabsTrigger
                value="voting"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                EC Voting
              </TabsTrigger>
              <TabsTrigger
                value="publishing"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Publishing
              </TabsTrigger>
              <TabsTrigger
                value="employee"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Employee
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="h-8 shrink-0 border border-transparent px-3 text-sm font-medium data-[state=active]:border-slate-800 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                Reports & Audit
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm md:p-5">
          {activeSection === "dashboard" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Module Flow Coverage</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {[
                    "Program creation and cloning",
                    "Cycle setup and nomination windows",
                    "Nomination submission and edits",
                    "L1 and BU head approvals",
                    "EC panel voting and reminders",
                    "Winner consolidation and certificate publishing",
                    "Employee certificate download and LinkedIn share",
                    "Geo-scoped HRBP reports and exports",
                    "Audit history for all key actions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-md border bg-white p-3 text-sm text-slate-700"
                    >
                       {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "programs" && (
            <div className="space-y-6">
              <Tabs defaultValue="nomination">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="continuous">Continuous</TabsTrigger>
                  <TabsTrigger value="nomination">Nomination</TabsTrigger>
                  <TabsTrigger value="milestone">Milestone</TabsTrigger>
                  <TabsTrigger value="event">Event-based</TabsTrigger>
                </TabsList>

                <TabsContent value="continuous" className="mt-4">
                  <ProgramCard
                    title="Continuous Appreciation (KUDOS / LIMELIGHT)"
                    fields={[
                      "Program name, code, badge, description",
                      "Eligible recognizer/recipient (FTE + contractors)",
                      "No approval flow, instant certificate trigger",
                      "Feed + email + LinkedIn configuration",
                    ]}
                  />
                </TabsContent>
                <TabsContent value="nomination" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Nomination Program Builder</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                      <Input placeholder="Program name" />
                      <Input placeholder="Unique program code" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Program duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="half-yearly">Half-yearly</SelectItem>
                          <SelectItem value="annual">Annual</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Nomination type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="non-panel">Non-panel voting</SelectItem>
                          <SelectItem value="panel">Panel voting (EC)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Nomination limit per manager (default 10)" />
                      <Input placeholder="Max recipient cap per cycle" />
                      <Input placeholder="INR / USD / GBP budget allocation" />
                      <Input placeholder="Quota per BU head" />
                      <Textarea
                        className="md:col-span-2"
                        placeholder="Value-based nomination questions, note limits, eligibility criteria..."
                      />
                      <div className="space-y-2 rounded-md border p-3">
                        <p className="text-sm font-medium">Rules</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Checkbox id="no-self" defaultChecked />
                          <label htmlFor="no-self">No self nomination</label>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Checkbox id="notice-period" />
                          <label htmlFor="notice-period">
                            Restrict on notice period
                          </label>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Checkbox id="contractor-exclude-monetary" defaultChecked />
                          <label htmlFor="contractor-exclude-monetary">
                            Contractors excluded from monetary awards
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2 rounded-md border p-3">
                        <p className="text-sm font-medium">Workflow and escalation</p>
                        <Input placeholder="Auto approval after X days" />
                        <Input placeholder="Escalation reminder every X days" />
                        <Input placeholder="EC panel members and limit" />
                      </div>
                      <div className="md:col-span-2 flex justify-end gap-2">
                        <Button variant="outline">Save Draft</Button>
                        <Button>Submit for Super Admin approval</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="milestone" className="mt-4">
                  <ProgramCard
                    title="Milestone Awards"
                    fields={[
                      "5/10/15 year criteria and anniversary triggers",
                      "Monetary/non-monetary value setup",
                      "Certificate and communication templates",
                      "Feed + email + chat channels",
                    ]}
                  />
                </TabsContent>
                <TabsContent value="event" className="mt-4">
                  <ProgramCard
                    title="Event-based Awards"
                    fields={[
                      "Start/end date and audience DL",
                      "Non-monetary recognition setup",
                      "Desk mailbox sender selection (DeskOfCPO, DeskOfCEO...)",
                      "Certificate trigger date and feed/email publishing",
                    ]}
                  />
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeSection === "cycle" && (
            <Card>
              <CardHeader>
                <CardTitle>Cycle Launch Configuration (Admin)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Nomination window: start date/time" />
                  <Input placeholder="Nomination window: end date/time" />
                  <Input placeholder="Approval window timeline (L1/BU/EC)" />
                  <Input placeholder="Escalation on no action (days)" />
                  <Input placeholder="Auto-approval threshold (days)" />
                  <Input placeholder="Notification audience (JL3+, DLs)" />
                </div>
                <Textarea placeholder="Cycle guidelines, award categories (individual/team), and eligibility notes..." />
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Preview launch email</Button>
                  <Button>Launch cycle</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "nominations" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manager Nomination Desk (JL3+)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input placeholder="Nominee employee ID / name" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Award category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="innovation">Innovation Excellence</SelectItem>
                        <SelectItem value="values">Values Champion</SelectItem>
                        <SelectItem value="ignite">Ignite Leadership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea placeholder="Nomination note aligned to values/behaviors..." />
                  <div className="flex gap-2">
                    <Button>Submit nomination</Button>
                    <Button variant="outline">Save draft</Button>
                    <Button variant="outline">Delete draft</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Submissions and Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={60} />
                  <p className="text-sm text-slate-600">
                    6 / 10 nominations used this cycle. Multiple nominations for
                    same award and same nominee are restricted.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "approvals" && (
            <Card>
              <CardHeader>
                <CardTitle>L1 and BU Approval Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nominee</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>L1 Status</TableHead>
                      <TableHead>BU Status</TableHead>
                      <TableHead>Quota</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Aarav Joshi", "Innovation", "Approved", "Pending", "12/20"],
                      ["Liam Carter", "Values", "Pending", "Not started", "9/10"],
                      ["Sofia Diaz", "Ignite", "Rejected", "N/A", "5/12"],
                    ].map((row) => (
                      <TableRow key={row[0]}>
                        {row.map((cell) => (
                          <TableCell key={cell}>{cell}</TableCell>
                        ))}
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm">Approve</Button>
                            <Button size="sm" variant="outline">
                              Return
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 rounded-md border bg-slate-50 p-3 text-sm text-slate-600">
                  Admin override is available: add nomination from backend, approve
                  on behalf of manager, and reassign not-in-span nominations.
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "voting" && (
            <div className="grid gap-6 xl:grid-cols-3">
              <Card className="xl:col-span-2">
                <CardHeader>
                  <CardTitle>EC Panel Routing and Voting</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Panel</TableHead>
                        <TableHead>Award Category</TableHead>
                        <TableHead>Members</TableHead>
                        <TableHead>Pending Votes</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>EC Panel North</TableCell>
                        <TableCell>Innovation Excellence</TableCell>
                        <TableCell>7</TableCell>
                        <TableCell>11</TableCell>
                        <TableCell>
                          <Button size="sm">Send reminder</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>EC Panel Global</TableCell>
                        <TableCell>CEO Distinction</TableCell>
                        <TableCell>9</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>
                          <Button size="sm">Send reminder</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Voting Completion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <VotingProgress label="Panel North" value={62} />
                  <VotingProgress label="Panel Global" value={88} />
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "publishing" && (
            <Card>
              <CardHeader>
                <CardTitle>Award Consolidation and Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Upload final winner list (voting flow)" />
                  <Input placeholder="Ceremony date / certificate trigger date" />
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-md border p-3">
                    <p className="font-medium">Non-voting awards</p>
                    <p className="mt-1 text-sm text-slate-600">
                      BU approvals complete → auto certificate trigger.
                    </p>
                  </div>
                  <div className="rounded-md border p-3">
                    <p className="font-medium">Voting awards</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Export voting results → upload final recipients.
                    </p>
                  </div>
                  <div className="rounded-md border p-3">
                    <p className="font-medium">Feed publishing</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Publish nomination note + certificate on ceremony date.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Preview certificate batch</Button>
                  <Button>Trigger certificate + feed publish</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "employee" && (
            <Card>
              <CardHeader>
                <CardTitle>Employee Award History and Certificate Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Award</TableHead>
                      <TableHead>Nomination Note</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2026-03-30</TableCell>
                      <TableCell>KUDOS</TableCell>
                      <TableCell>Customer Obsession</TableCell>
                      <TableCell>Exceptional cross-team support for client launch.</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm">Download</Button>
                          <Button size="sm" variant="outline">
                            Share LinkedIn
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {activeSection === "notifications" && (
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Channel Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Email",
                    "In-app",
                    "Recognition feed",
                    "LinkedIn",
                    "Chat",
                    "Yammer",
                  ].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <span className="text-sm">{channel}</span>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mailbox and Audience Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Mailbox sender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cpo">DeskOfCPO</SelectItem>
                      <SelectItem value="ceo">DeskOfCEO</SelectItem>
                      <SelectItem value="hr">DeskOfHR</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Primary audience (DL / role group)" />
                  <Input placeholder="Exclusion list" />
                  <Textarea placeholder="Lifecycle notification remarks..." />
                  <Button className="w-full">Save notification policy</Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "reports" && (
            <Card>
              <CardHeader>
                <CardTitle>Reports, Exports and Audit Trail</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="admin">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                    <TabsTrigger value="hrbp">Location HRBP</TabsTrigger>
                    <TabsTrigger value="bu">BU Head</TabsTrigger>
                    <TabsTrigger value="audit">Audit Log</TabsTrigger>
                  </TabsList>

                  <TabsContent value="admin" className="mt-4">
                    <ReportPanel
                      title="Global reporting"
                      bullets={[
                        "Active/inactive/archived programs",
                        "Pending with L1 / BU / EC",
                        "Filter by team, function, manager, BU, location",
                        "Export historical nomination and appreciation reports",
                      ]}
                    />
                  </TabsContent>
                  <TabsContent value="hrbp" className="mt-4">
                    <ReportPanel
                      title="Geo-scoped HRBP reports"
                      bullets={[
                        "Location-restricted nomination tracking",
                        "Function/team/manager/location filters",
                        "Past and current cycle exports",
                        "Appreciation metrics by location",
                      ]}
                    />
                  </TabsContent>
                  <TabsContent value="bu" className="mt-4">
                    <ReportPanel
                      title="BU recommendation reporting"
                      bullets={[
                        "Nomination list by function/team/band",
                        "Budget and quota tracking per BU head",
                        "Received vs approved totals",
                        "Export vertical recommendation list",
                      ]}
                    />
                  </TabsContent>
                  <TabsContent value="audit" className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Date-Time</TableHead>
                          <TableHead>Change details</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>HR Admin</TableCell>
                          <TableCell>Edit nomination config</TableCell>
                          <TableCell>2026-04-16 10:32</TableCell>
                          <TableCell>Nomination limit changed 8 → 10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Super Admin</TableCell>
                          <TableCell>Approve program update</TableCell>
                          <TableCell>2026-04-16 11:15</TableCell>
                          <TableCell>Enabled EC panel workflow</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
          </div>

          <footer className="mt-6 rounded-lg border bg-white p-4 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Active role view: <Badge variant="outline">{roleView}</Badge>
              <span className="text-slate-500">
                • Supports Admin, Super Admin, HRBP, BU Head, EC and Employee flows
              </span>
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}

function ProgramCard({ title, fields }: { title: string; fields: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {fields.map((field) => (
          <div key={field} className="rounded-md border p-3 text-sm text-slate-700">
            {field}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function VotingProgress({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

function ReportPanel({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-md border bg-slate-50 p-4">
      <p className="mb-3 font-medium">{title}</p>
      <ul className="space-y-2 text-sm text-slate-600">
        {bullets.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
