import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Calendar, MapPin, Database, BarChart3, FileText } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Cử nhân Hệ thống thông tin quản lý",
      school: "Học viện ngân hàng",
      period: "2021 - 2025 (dự kiến)",
      gpa: "3.71/4.0 (8.5/10)",
      location: "Hà Nội, Việt Nam",
      highlights: [
        "Chuyên ngành: Management Information Systems",
        "Thành viên CLB Nghiên cứu Khoa học",
        "Học bổng khuyến khích học tập 2023-2024",
        "Top 15% khóa học",
        "Tham gia dự án nghiên cứu về Fintech"
      ],
      description: "Ngành MIS tại Học viện ngân hàng trang bị kiến thức toàn diện về business, technology và financial services - nền tảng hoàn hảo cho Business Analyst trong lĩnh vực banking và fintech."
    }
  ];

  // Sắp xếp theo thứ tự quan trọng cho BA
  const relevantCoursework = [
    { 
      name: "Phân tích nghiệp vụ", 
      grade: "A (9.2/10)", 
      icon: BarChart3,
      description: "Nền tảng cốt lõi cho nghề BA - phân tích business processes và requirements"
    },
    { 
      name: "Cơ sở dữ liệu (SQL Server)", 
      grade: "A (8.5/10)", 
      icon: Database,
      description: "Kỹ năng SQL là must-have cho BA trong việc data analysis"
    },
    { 
      name: "Thiết kế cơ sở dữ liệu", 
      grade: "A (9.1/10)", 
      icon: Database,
      description: "Hiểu data modeling giúp BA design better solutions"
    },
    { 
      name: "Hệ quản trị CSDL (Oracle)", 
      grade: "A (8.9/10)", 
      icon: Database,
      description: "Enterprise database knowledge for large-scale systems"
    },
    { 
      name: "Thương mại điện tử", 
      grade: "A (8.5/10)", 
      icon: FileText,
      description: "Digital business processes và e-commerce analytics"
    },
    { 
      name: "Phân tích thiết kế hệ thống", 
      grade: "B+ (8.1/10)", 
      icon: FileText,
      description: "System analysis và design - core BA competency"
    },
    { 
      name: "Thực tập chuyên ngành", 
      grade: "A (8.8/10)", 
      icon: GraduationCap,
      description: "Practical experience applying theoretical knowledge"
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics Certificate",
      issuer: "Google",
      date: "Tháng 8, 2024",
      credentialId: "ABC123456789",
      skills: ["Data Analysis", "SQL", "Tableau", "R", "Data Visualization"]
    },
    {
      title: "Microsoft Excel Expert",
      issuer: "Microsoft",
      date: "Tháng 6, 2024",
      credentialId: "MS-77-888",
      skills: ["Advanced Excel", "Pivot Tables", "VBA", "Data Modeling"]
    },
    {
      title: "Business Analysis Fundamentals",
      issuer: "Coursera - University of Virginia",
      date: "Tháng 4, 2024",
      credentialId: "COURSERA123",
      skills: ["Requirements Analysis", "Process Mapping", "Stakeholder Management"]
    },
    {
      title: "Oracle Database SQL Certified Associate",
      issuer: "Oracle",
      date: "Tháng 5, 2024",
      credentialId: "OCA-SQL-2024",
      skills: ["Oracle SQL", "Database Design", "Query Optimization"]
    }
  ];

  const academicAchievements = [
    "GPA 3.71/4.0 - Top 15% khóa học",
    "Điểm A cho tất cả môn chuyên ngành chính",
    "Học bổng khuyến khích học tập 2023-2024",
    "Thành viên tích cực CLB Nghiên cứu Khoa học",
    "Tham gia dự án nghiên cứu về Fintech Innovation",
    "Hoàn thành thực tập chuyên ngành với đánh giá cao"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Học vấn & Chứng chỉ</h2>
            <p className="text-lg text-muted-foreground">
              Background MIS - nền tảng vững chắc cho Business Analyst
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Học vấn</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index} className="mb-6 border-primary/20">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                      <p className="text-lg text-muted-foreground font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground italic">{edu.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2 bg-accent text-accent-foreground">{edu.gpa}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Thành tích nổi bật:</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Relevant Coursework - Sorted by importance for BA */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Môn học liên quan (theo thứ tự quan trọng cho BA)</h3>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {relevantCoursework.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-accent/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3 mt-1">
                        <course.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{course.name}</h4>
                          <Badge className="bg-accent text-accent-foreground">{course.grade}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Thành tích học thuật</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {academicAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-white/50">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                      <span className="text-sm font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Chứng chỉ chuyên môn</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-accent/10">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium">{cert.issuer}</p>
                      <p>{cert.date}</p>
                      <p className="font-mono text-xs">ID: {cert.credentialId}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-2">Kỹ năng đạt được:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}