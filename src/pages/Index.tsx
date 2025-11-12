import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const periodicTableData = [
  { symbol: 'H', name: 'Водород', number: 1, group: 'nonmetal', year: 1766 },
  { symbol: 'He', name: 'Гелий', number: 2, group: 'noble', year: 1868 },
  { symbol: 'Li', name: 'Литий', number: 3, group: 'alkali', year: 1817 },
  { symbol: 'Be', name: 'Бериллий', number: 4, group: 'alkaline', year: 1798 },
  { symbol: 'B', name: 'Бор', number: 5, group: 'metalloid', year: 1808 },
  { symbol: 'C', name: 'Углерод', number: 6, group: 'nonmetal', year: -3750 },
  { symbol: 'N', name: 'Азот', number: 7, group: 'nonmetal', year: 1772 },
  { symbol: 'O', name: 'Кислород', number: 8, group: 'nonmetal', year: 1774 },
  { symbol: 'F', name: 'Фтор', number: 9, group: 'halogen', year: 1886 },
  { symbol: 'Ne', name: 'Неон', number: 10, group: 'noble', year: 1898 },
  { symbol: 'Na', name: 'Натрий', number: 11, group: 'alkali', year: 1807 },
  { symbol: 'Mg', name: 'Магний', number: 12, group: 'alkaline', year: 1755 },
  { symbol: 'Al', name: 'Алюминий', number: 13, group: 'post-transition', year: 1825 },
  { symbol: 'Si', name: 'Кремний', number: 14, group: 'metalloid', year: 1824 },
  { symbol: 'P', name: 'Фосфор', number: 15, group: 'nonmetal', year: 1669 },
  { symbol: 'S', name: 'Сера', number: 16, group: 'nonmetal', year: -2000 },
  { symbol: 'Cl', name: 'Хлор', number: 17, group: 'halogen', year: 1774 },
  { symbol: 'Ar', name: 'Аргон', number: 18, group: 'noble', year: 1894 },
];

const scientists = [
  { name: 'Дмитрий Менделеев', years: '1834-1907', achievement: 'Периодическая система' },
  { name: 'Антуан Лавуазье', years: '1743-1794', achievement: 'Основы химии' },
  { name: 'Мария Кюри', years: '1867-1934', achievement: 'Радиоактивность' },
  { name: 'Альфред Нобель', years: '1833-1896', achievement: 'Динамит' },
];

const discoveries = [
  { year: '1669', title: 'Фосфор', scientist: 'Хенниг Бранд' },
  { year: '1766', title: 'Водород', scientist: 'Генри Кавендиш' },
  { year: '1869', title: 'Периодическая система', scientist: 'Д. Менделеев' },
  { year: '1898', title: 'Радий и полоний', scientist: 'М. Кюри' },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedElement, setSelectedElement] = useState<any>(null);

  const getElementColor = (group: string) => {
    const colors = {
      alkali: 'bg-red-500/20 hover:bg-red-500/40 border-red-500',
      alkaline: 'bg-orange-500/20 hover:bg-orange-500/40 border-orange-500',
      'post-transition': 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500',
      metalloid: 'bg-yellow-500/20 hover:bg-yellow-500/40 border-yellow-500',
      nonmetal: 'bg-green-500/20 hover:bg-green-500/40 border-green-500',
      halogen: 'bg-purple-500/20 hover:bg-purple-500/40 border-purple-500',
      noble: 'bg-cyan-500/20 hover:bg-cyan-500/40 border-cyan-500',
    };
    return colors[group as keyof typeof colors] || 'bg-gray-500/20';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">⚗️ История Химии</h1>
            <div className="flex gap-2">
              {['home', 'history', 'scientists', 'discoveries', 'table'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section)}
                  className="capitalize"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'history' && 'История'}
                  {section === 'scientists' && 'Ученые'}
                  {section === 'discoveries' && 'Открытия'}
                  {section === 'table' && 'Таблица'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {activeSection === 'home' && (
          <section className="container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Путешествие по истории химии
              </h2>
              <p className="text-xl text-muted-foreground">
                От древних алхимиков до современных открытий
              </p>
              <div className="flex justify-center gap-4 pt-8">
                <Button size="lg" onClick={() => setActiveSection('table')} className="gap-2">
                  <Icon name="Atom" size={20} />
                  Таблица Менделеева
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('history')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <div className="text-5xl mb-4">🧪</div>
                <h3 className="text-xl font-semibold mb-2">Элементы</h3>
                <p className="text-muted-foreground">118 известных элементов</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl mb-4">👨‍🔬</div>
                <h3 className="text-xl font-semibold mb-2">Ученые</h3>
                <p className="text-muted-foreground">Великие умы химии</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Открытия</h3>
                <p className="text-muted-foreground">Изменившие мир</p>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'history' && (
          <section className="container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-center mb-12">История химии</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Античность</h3>
                  <p className="text-muted-foreground">Философы изучали природу материи, предложили идею атомов</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Алхимия (300-1600)</h3>
                  <p className="text-muted-foreground">Поиск философского камня, превращение металлов в золото</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Научная революция (1600-1800)</h3>
                  <p className="text-muted-foreground">Лавуазье заложил основы современной химии, открытие кислорода</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Современность (1869+)</h3>
                  <p className="text-muted-foreground">Менделеев создал периодическую систему, открытие радиоактивности</p>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'scientists' && (
          <section className="container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Великие химики</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {scientists.map((scientist, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-semibold mb-2">{scientist.name}</h3>
                    <p className="text-muted-foreground mb-2">{scientist.years}</p>
                    <p className="text-primary font-medium">{scientist.achievement}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'discoveries' && (
          <section className="container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Ключевые открытия</h2>
              <div className="space-y-4">
                {discoveries.map((discovery, index) => (
                  <Card key={index} className="p-6 flex items-center gap-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-primary min-w-[100px]">{discovery.year}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{discovery.title}</h3>
                      <p className="text-muted-foreground">{discovery.scientist}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'table' && (
          <section className="container mx-auto px-6 animate-fade-in">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Периодическая таблица Менделеева</h2>
              <p className="text-center text-muted-foreground mb-8">Нажмите на элемент для подробностей</p>
              
              <div className="grid grid-cols-6 sm:grid-cols-9 gap-2 mb-8">
                {periodicTableData.map((element) => (
                  <button
                    key={element.number}
                    onClick={() => setSelectedElement(element)}
                    className={`p-3 rounded-lg border-2 transition-all ${getElementColor(element.group)} hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="text-xs text-muted-foreground">{element.number}</div>
                    <div className="text-2xl font-bold">{element.symbol}</div>
                    <div className="text-xs truncate">{element.name}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Группы элементов</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500/40 border-2 border-red-500"></div>
                    <span className="text-sm">Щелочные</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500/40 border-2 border-orange-500"></div>
                    <span className="text-sm">Щелочноземельные</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500/40 border-2 border-green-500"></div>
                    <span className="text-sm">Неметаллы</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500/40 border-2 border-purple-500"></div>
                    <span className="text-sm">Галогены</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-cyan-500/40 border-2 border-cyan-500"></div>
                    <span className="text-sm">Инертные</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-500/40 border-2 border-yellow-500"></div>
                    <span className="text-sm">Металлоиды</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-500/40 border-2 border-blue-500"></div>
                    <span className="text-sm">Постпереходные</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}
      </main>

      <Dialog open={!!selectedElement} onOpenChange={() => setSelectedElement(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-3xl">
              {selectedElement?.symbol} - {selectedElement?.name}
            </DialogTitle>
            <DialogDescription className="space-y-2 pt-4">
              <p className="text-lg">
                <span className="font-semibold">Атомный номер:</span> {selectedElement?.number}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Год открытия:</span>{' '}
                {selectedElement?.year > 0 ? selectedElement?.year : `${Math.abs(selectedElement?.year)} до н.э.`}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
