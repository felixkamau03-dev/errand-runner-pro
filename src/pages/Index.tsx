
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Package, Phone, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted p-6">
      {/* Header / Hero */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold text-foreground">Run Errands For You</div>
        <Button className="flex items-center gap-2 rounded-2xl shadow-lg px-4 py-3">
          <Phone className="w-5 h-5" />
          Message on WhatsApp
        </Button>
      </header>

      <section className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Your errands, handled with care.
          </h1>
          <p className="text-lg text-muted-foreground">
            From deliveries to office drops, shopping pickups to personal
            tasks—we do it all. Fast. Transparent. Tracked.
          </p>
          <Button className="mt-2 px-6 py-3 rounded-2xl shadow-lg">
            Request an Errand Now
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-64 bg-card rounded-2xl shadow border p-4 flex flex-col items-center justify-center">
            {/* Placeholder Hero Illustration */}
            <Package className="w-16 h-16 text-primary" />
            <div className="mt-2 text-center">
              <div className="font-semibold text-card-foreground">Errands Made Simple</div>
              <div className="text-sm text-muted-foreground">Pickup • Track • Deliver</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">What We Can Do For You</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl shadow">
            <CardContent className="flex items-start gap-4 p-4">
              <Package className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-card-foreground">Deliveries</div>
                <div className="text-sm text-muted-foreground">
                  Pick up and drop off items safely.
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="flex items-start gap-4 p-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-card-foreground">Office Errands</div>
                <div className="text-sm text-muted-foreground">
                  Drop documents or parcels to workplaces.
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="flex items-start gap-4 p-4">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-card-foreground">Shopping Pickups</div>
                <div className="text-sm text-muted-foreground">
                  Collect items from stores or markets.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="rounded-2xl shadow">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="text-xl font-bold text-foreground">1</div>
              <div className="mt-2 text-card-foreground">Tell Us Your Errand</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="text-xl font-bold text-foreground">2</div>
              <div className="mt-2 text-card-foreground">We Pick It Up</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="text-xl font-bold text-foreground">3</div>
              <div className="mt-2 text-card-foreground">Track in Real-Time</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="text-xl font-bold text-foreground">4</div>
              <div className="mt-2 text-card-foreground">Relax</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Prompt */}
      <section className="mb-12 bg-card rounded-2xl shadow border p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-card-foreground">Tracking Made Simple</h3>
          <p className="text-muted-foreground">
            Once we pick up your package, get a live location link so you can
            follow progress in real time. Zero guesswork.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-40 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-sm italic text-muted-foreground">[Map placeholder]</div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="mb-12">
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-lg font-bold text-foreground">
              Need something done today?
            </h4>
            <p className="text-muted-foreground">Message us now and we'll handle it immediately.</p>
          </div>
          <Button className="mt-4 md:mt-0 px-6 py-3 rounded-2xl shadow-lg">
            WhatsApp Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} Run Errands For You</div>
        <div className="flex gap-6">
          <div>Home</div>
          <div>Services</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="italic">
          *Packages must be well packaged before pickup.
        </div>
      </footer>
    </div>
  );
};

export default Index;
