import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Download, Users, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent-foreground border border-accent/20">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">Sẵn sàng cho cơ hội thực tập BA</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Xin chào, tôi là <span className="text-primary">Bạn</span>
              </h1>
              <h2 className="text-xl text-muted-foreground">
                Sinh viên năm 4 - Ngành Hệ thống thông tin quản lý
              </h2>
              <h3 className="text-lg text-primary">
                Học viện ngân hàng • Hà Nội • GPA: 3.71/4.0
              </h3>
              <p className="text-lg text-muted-foreground max-w-lg">
                Background <span className="text-primary font-medium">Hệ thống thông tin quản lý</span> - 
                sự kết hợp hoàn hảo giữa business và technology. Hiểu sâu về vai trò 
                <span className="text-accent font-medium"> Business Analyst</span> với kiến thức vững về 
                cơ sở dữ liệu, phân tích nghiệp vụ và thiết kế hệ thống.
              </p>
              
              {/* Key Strengths */}
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Users className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">Phân tích nghiệp vụ: 9.2/10</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                  <FileText className="h-3 w-3 text-accent" />
                  <span className="text-xs text-accent-foreground">Database: SQL Server + Oracle</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Liên hệ ngay
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Download className="mr-2 h-4 w-4" />
                Tải CV
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +84 xxx xxx xxx
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                your.email@email.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Hà Nội, Việt Nam
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-6 max-w-sm border-accent/20 shadow-lg">
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted border-4 border-accent/20">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <Badge className="bg-accent text-accent-foreground">
                      Available
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-primary">BA Intern Candidate</h3>
                  <p className="text-sm text-muted-foreground">Hệ thống thông tin quản lý</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    "Business + Technology = Perfect BA"
                  </p>
                </div>
                
                {/* Academic Strengths */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Phân tích nghiệp vụ</span>
                    <span className="text-accent font-medium">9.2/10</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Database Design</span>
                    <span className="text-accent font-medium">9.1/10</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Overall GPA</span>
                    <span className="text-primary font-medium">3.71/4.0</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}