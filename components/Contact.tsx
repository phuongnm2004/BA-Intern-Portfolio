import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nguyenvanan@email.com",
      action: "mailto:nguyenvanan@email.com"
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: "+84 123 456 789",
      action: "tel:+84123456789"
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "TP. Hồ Chí Minh, Việt Nam",
      action: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nguyenvanan",
      action: "https://github.com/nguyenvanan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nguyenvanan",
      action: "https://linkedin.com/in/nguyenvanan"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Liên hệ với tôi</h2>
            <p className="text-lg text-muted-foreground">
              Hãy liên hệ để thảo luận về cơ hội thực tập hoặc hợp tác
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="text-primary">Thông tin liên hệ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="rounded-full bg-accent/10 p-2 border border-accent/20">
                        <info.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{info.label}</p>
                        {info.action ? (
                          <a 
                            href={info.action} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-primary">Sẵn sàng cho cơ hội mới</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tôi đang tìm kiếm cơ hội thực tập Business Analyst để áp dụng kiến thức 
                    và học hỏi kinh nghiệm thực tế. Hãy liên hệ nếu bạn có vị trí phù hợp!
                  </p>
                  <div className="flex gap-2">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href="mailto:nguyenvanan@email.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Gửi email
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <a href="tel:+84123456789">
                        <Phone className="mr-2 h-4 w-4" />
                        Gọi điện
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-primary">Gửi tin nhắn</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email của bạn"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Chủ đề</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Chủ đề tin nhắn"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tin nhắn</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Nội dung tin nhắn..."
                      rows={5}
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}