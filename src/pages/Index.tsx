
import { Heart, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import ValueCard from '@/components/ValueCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-white to-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Conectando corações puros com propósito
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            Um movimento espiritual que promove conexão entre pessoas com valores cristãos
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-gray-800"
          >
            Junte-se a nós
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre nós</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              A Conecta Sião é um movimento espiritual inspirado na escritura:
            </p>
            <blockquote className="text-2xl font-medium italic mb-8 text-gray-700">
              "Esta é Sião — os puros de coração."
              <footer className="text-sm text-gray-500 mt-2">
                Doutrina e Convênios 97:21
              </footer>
            </blockquote>
            <p className="text-lg text-gray-600">
              Nossa missão é fortalecer a conexão espiritual e criar uma comunidade
              vibrante de pessoas comprometidas com valores cristãos.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-accent-pink/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Heart}
              title="Espiritualidade"
              description="Cultivamos uma conexão profunda com o divino através da fé e da prática diária."
            />
            <ValueCard
              icon={Users}
              title="Conexão"
              description="Construímos pontes entre corações, fortalecendo laços de amizade e apoio mútuo."
            />
            <ValueCard
              icon={Sparkles}
              title="Alegria"
              description="Celebramos a vida com gratidão e compartilhamos momentos de felicidade genuína."
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="eventos" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Comunidade</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-accent-beige rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Eventos e Encontros</h3>
              <p className="text-gray-600 mb-6">
                Participamos juntos de momentos especiais de adoração, estudo e
                confraternização, fortalecendo nossa fé e amizade.
              </p>
              <Button variant="outline">Ver próximos eventos</Button>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Atividades</h3>
              <p className="text-gray-600 mb-6">
                Desenvolvemos projetos e atividades que promovem o crescimento
                espiritual e o serviço ao próximo.
              </p>
              <Button variant="outline">Saiba mais</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-xl font-medium mb-6">
            "Unidos em propósito, fortes na fé"
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">YouTube</a>
          </div>
          <p className="text-gray-500">
            contato@conectasiao.com.br
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
