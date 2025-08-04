import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { BarChart3, Database, FileSpreadsheet, Presentation, Users, Lightbulb, Brain, MessageCircle, Target, Clock, Heart, Zap, FileText, Settings } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "Excel/Google Sheets", level: 85, category: "Data Analysis" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "Power BI", level: 70, category: "Visualization" },
    { name: "Visio/Draw.io", level: 65, category: "Process Mapping" },
    { name: "Python (Pandas)", level: 60, category: "Programming" },
    { name: "Tableau", level: 60, category: "Visualization" }
  ];

  const softSkills = [
    { 
      name: "Requirements Analysis", 
      level: 88,
      description: "Khả năng thu thập, phân tích và làm rõ yêu cầu từ stakeholders",
      icon: Target
    },
    { 
      name: "Stakeholder Communication", 
      level: 85,
      description: "Giao tiếp hiệu quả với các bên liên quan ở mọi cấp độ",
      icon: MessageCircle
    },
    { 
      name: "Problem Solving", 
      level: 87,
      description: "Xác định root cause và đưa ra solutions phù hợp",
      icon: Brain
    },
    { 
      name: "Documentation", 
      level: 83,
      description: "Viết tài liệu đặc tả yêu cầu rõ ràng và chi tiết",
      icon: FileText
    },
    { 
      name: "Process Analysis", 
      level: 80,
      description: "Phân tích và tối ưu hóa quy trình kinh doanh",
      icon: Settings
    },
    { 
      name: "Project Coordination", 
      level: 78,
      description: "Hỗ trợ PM và điều phối các hoạt động dự án",
      icon: Users
    },
    { 
      name: "Change Management", 
      level: 75,
      description: "Quản lý và thích ứng với thay đổi yêu cầu",
      icon: Zap
    },
    { 
      name: "Business Understanding", 
      level: 85,
      description: "Hiểu sâu về business domain và industry knowledge",
      icon: Lightbulb
    }
  ];

  const baMethodologies = [
    "Agile/Scrum Requirements",
    "Waterfall Analysis", 
    "User Story Mapping",
    "Process Modeling (BPMN)",
    "Gap Analysis Framework",
    "Risk Assessment",
    "Impact Analysis",
    "Stakeholder Analysis"
  ];

  const documentationSkills = [
    "Business Requirements Document (BRD)",
    "Functional Requirements Specification (FRS)", 
    "User Acceptance Criteria",
    "Process Flow Diagrams",
    "Use Cases & User Stories",
    "Test Cases & Scenarios",
    "Training Materials",
    "Change Request Documentation"
  ];

  const skillCategories = [
    {
      icon: MessageCircle,
      title: "Requirements Engineering",
      description: "Thu thập, phân tích và quản lý yêu cầu"
    },
    {
      icon: Users,
      title: "Stakeholder Management", 
      description: "Giao tiếp và quản lý các bên liên quan"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Tạo tài liệu đặc tả và hướng dẫn"
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      description: "Phân tích nghiệp vụ và quy trình"
    },
    {
      icon: Settings,
      title: "Process Improvement",
      description: "Tối ưu hóa và cải tiến quy trình"
    },
    {
      icon: Target,
      title: "Solution Design",
      description: "Thiết kế giải pháp phù hợp"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kỹ năng Business Analyst</h2>
            <p className="text-lg text-muted-foreground">
              Tổng hợp các kỹ năng kỹ thuật, mềm và phương pháp luận BA chuyên nghiệp
            </p>
          </div>

          {/* BA Skill Categories Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-accent/10">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{category.title}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Skills for BA */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Kỹ năng công cụ & kỹ thuật
                </CardTitle>
                <p className="text-muted-foreground">
                  Các công cụ và kỹ năng kỹ thuật hỗ trợ công việc BA
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* BA Core Skills */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Kỹ năng cốt lõi Business Analyst
                </CardTitle>
                <p className="text-muted-foreground">
                  Các kỹ năng chuyên môn quan trọng nhất cho BA
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-accent/10 p-2 mt-1">
                          <skill.icon className="h-4 w-4 text-accent" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BA Methodologies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Phương pháp luận & Framework
                </CardTitle>
                <p className="text-muted-foreground">
                  Các phương pháp và framework BA tôi áp dụng
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {baMethodologies.map((method, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2 px-3 border-primary/30 hover:bg-primary/10">
                      {method}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documentation Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Kỹ năng tài liệu hóa
                </CardTitle>
                <p className="text-muted-foreground">
                  Các loại tài liệu BA tôi có thể tạo
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {documentationSkills.map((doc, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2 px-3 border-accent/30 hover:bg-accent/10">
                      {doc}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}