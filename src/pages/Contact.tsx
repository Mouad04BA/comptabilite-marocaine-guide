
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Votre message a été envoyé ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@comptamaroc.ma",
      description: "Nous répondons généralement dans les 24-48 heures."
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+212 522 123 456",
      description: "Du lundi au vendredi, de 9h à 17h."
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 Boulevard Mohammed V, Casablanca",
      description: "Quartier des affaires, 3ème étage."
    },
    {
      icon: Clock,
      title: "Heures d'ouverture",
      details: "Lundi - Vendredi: 9h - 17h",
      description: "Fermé les week-ends et jours fériés."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | ComptaMaroc</title>
        <meta name="description" content="Contactez notre équipe pour toute question concernant la comptabilité marocaine." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-12">
            <div className="container px-4 sm:px-6">
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Contactez-nous</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Nous sommes là pour répondre à toutes vos questions sur la comptabilité marocaine
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Envoyez-nous un message</CardTitle>
                      <CardDescription>
                        Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nom complet</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
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
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Sujet</Label>
                          <Input 
                            id="subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Objet de votre message"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Détaillez votre demande ici..."
                            rows={5}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Envoyer le message</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 auto-rows-min">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-primary/10 p-2 mt-1">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{info.title}</h3>
                            <p className="text-base">{info.details}</p>
                            <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
