import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, Users, TrendingUp, Brain, FileText, Lightbulb, Settings, MessageSquare, Database, Code } from "lucide-react";

export function About() {
  const baDefinitions = [
    {
      icon: Target,
      title: "Giải pháp cho khách hàng",
      description: "Đưa ra giải pháp IT và Non-IT phù hợp với nhu cầu kinh doanh của khách hàng"
    },
    {
      icon: Users,
      title: "Cầu nối dev team",
      description: "Đảm bảo đội phát triển hiểu đúng yêu cầu nghiệp vụ và phát triển đúng giải pháp"
    },
    {
      icon: TrendingUp,
      title: "Phân tích & thiết kế",
      description: "Sử dụng phân tích và thiết kế kỹ thuật để giải quyết vấn đề kinh doanh"
    },
    {
      icon: Settings,
      title: "Quản lý thay đổi",
      description: "Xác định thay đổi cần thiết, thiết kế lại hệ thống và đào tạo người dùng"
    }
  ];

  const mainResponsibilities = [
    {
      icon: MessageSquare,
      title: "Giao tiếp & phân tích yêu cầu",
      description: "Giao tiếp với stakeholders, gợi ý và phân tích yêu cầu thay đổi quy trình kinh doanh"
    },
    {
      icon: Lightbulb,
      title: "Trình bày giải pháp",
      description: "Đưa ra và trình bày giải pháp hiệu quả cho khách hàng để giải quyết bài toán kinh doanh"
    },
    {
      icon: FileText,
      title: "Tài liệu đặc tả",
      description: "Xây dựng tài liệu đặc tả yêu cầu chi tiết và truyền đạt với đội phát triển"
    },
    {
      icon: Target,
      title: "Quản lý scope",
      description: "Quyết định yêu cầu nào đội phát triển sẽ phụ trách và quản lý thay đổi yêu cầu"
    }
  ];

  const misAdvantages = [
    {
      icon: Database,
      title: "Hiểu biết kỹ thuật sâu",
      description: "Kiến thức vững về cơ sở dữ liệu, thiết kế hệ thống giúp giao tiếp hiệu quả với dev team"
    },
    {
      icon: Brain,
      title: "Tư duy hệ thống",
      description: "Được đào tạo để nhìn nhận vấn đề từ góc độ tổng thể và liên kết các thành phần"
    },
    {
      icon: Code,
      title: "Cầu nối Business-Tech",
      description: "Hiểu cả ngôn ngữ business và technical, dễ dàng translate requirements"
    },
    {
      icon: Settings,
      title: "Quản lý thông tin",
      description: "Chuyên môn về quản lý và phân tích thông tin trong tổ chức"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Về tôi & Background MIS</h2>
            <p className="text-lg text-muted-foreground">
              Tại sao ngành Hệ thống thông tin quản lý là nền tảng hoàn hảo cho Business Analyst
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Background Academic</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Tôi là sinh viên năm 4 ngành <span className="text-primary font-medium">Hệ thống thông tin quản lý</span> 
                    tại Học viện ngân hàng, Hà Nội với GPA 3.71/4.0. Ngành học này đã trang bị cho tôi 
                    kiến thức vững chắc về cả business process và technology implementation.
                  </p>
                  <p>
                    Điểm mạnh của tôi là môn <span className="text-accent font-medium">Phân tích nghiệp vụ (9.2/10)</span> 
                    và các môn về database như Thiết kế CSDL (9.1/10), SQL Server (8.5/10), và Oracle (8.9/10). 
                    Điều này cho thấy tôi có foundation tốt cho nghề BA.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Tại sao MIS phù hợp với BA?</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ngành MIS trang bị cho tôi <span className="text-accent font-medium">góc nhìn toàn diện</span> 
                    về cách technology serve business needs. Tôi hiểu cách thiết kế và implement 
                    các information systems để support business processes.
                  </p>
                  <p>
                    Điều này giúp tôi trở thành BA hiệu quả vì tôi có thể communicate với cả business users 
                    và technical teams, hiểu constraints và possibilities của technology khi đưa ra solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* MIS Advantages for BA */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Lợi thế của MIS trong nghề BA</h3>
              <p className="text-muted-foreground">
                Tại sao background MIS là nền tảng vững chắc cho Business Analyst
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {misAdvantages.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-accent/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-accent/10 p-3">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* BA Definition */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Business Analyst là gì?</h3>
              <p className="text-muted-foreground">
                Hiểu biết của tôi về định nghĩa và vai trò cốt lõi của Business Analyst
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {baDefinitions.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Responsibilities */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Công việc chính của BA</h3>
              <p className="text-muted-foreground">
                Các trách nhiệm cốt lõi mà tôi hiểu và chuẩn bị thực hiện
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mainResponsibilities.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3 mt-1">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Vision */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Định hướng nghề nghiệp</h3>
              <p className="text-muted-foreground mb-4">
                Với nền tảng MIS vững chắc, tôi tin rằng mình có thể trở thành một BA hiệu quả, 
                có khả năng bridge gap giữa business requirements và technical implementation. 
                Mục tiêu là phát triển thành Senior BA hoặc Product Manager trong ngành fintech/banking.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Database-savvy BA", 
                  "Technical Requirements Expert", 
                  "System Design Analyst",
                  "Process Optimization Specialist", 
                  "Fintech Domain Expert", 
                  "Banking Systems Analyst"
                ].map((skill, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 border-primary/30 hover:bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}