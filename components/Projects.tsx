import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, BarChart, TrendingUp, Users, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Phân tích hành vi khách hàng E-commerce",
      description: "Nghiên cứu và phân tích pattern mua sắm của khách hàng trên platform e-commerce, xác định các yếu tố ảnh hưởng đến conversion rate và đưa ra recommendations để tăng doanh thu.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["Excel", "SQL", "Power BI", "Python"],
      highlights: [
        "Tăng conversion rate 15%",
        "Xác định 3 customer segments chính",
        "Giảm cart abandonment 20%"
      ],
      icon: ShoppingCart,
      category: "E-commerce Analytics"
    },
    {
      id: 2,
      title: "Tối ưu hóa quy trình bán hàng",
      description: "Phân tích quy trình bán hàng hiện tại của công ty, xác định bottlenecks và đề xuất solution để cải thiện efficiency và customer satisfaction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Process Mapping", "Tableau", "SQL", "Excel"],
      highlights: [
        "Giảm sales cycle time 30%",
        "Tăng customer satisfaction 25%",
        "Tiết kiệm 40 giờ/tuần cho team"
      ],
      icon: TrendingUp,
      category: "Process Optimization"
    },
    {
      id: 3,
      title: "Dashboard theo dõi KPI Marketing",
      description: "Xây dựng dashboard tự động để theo dõi performance của các campaigns marketing, bao gồm ROI, CAC, LTV và các metrics quan trọng khác.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Power BI", "Excel", "Google Analytics", "SQL"],
      highlights: [
        "Real-time monitoring",
        "Tự động hóa 90% reporting",
        "Cải thiện data accuracy 35%"
      ],
      icon: BarChart,
      category: "Marketing Analytics"
    },
    {
      id: 4,
      title: "Nghiên cứu thị trường ngành F&B",
      description: "Thực hiện market research về ngành F&B tại TP.HCM, phân tích competitive landscape và consumer behavior để đưa ra strategic recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Survey Design", "SPSS", "Excel", "PowerPoint"],
      highlights: [
        "Khảo sát 500+ respondents",
        "Xác định 5 market opportunities",
        "Present findings cho leadership"
      ],
      icon: Users,
      category: "Market Research"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dự án nổi bật</h2>
            <p className="text-lg text-muted-foreground">
              Các dự án phân tích và nghiên cứu tôi đã thực hiện
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-accent/10 border-accent/10">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="rounded-full bg-white/90 p-2 shadow-lg">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="hover:bg-accent/10 hover:text-accent-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Xem chi tiết
                    </Button>
                    <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}