import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { allProducts, productGroups } from "../data/productsData";

const ProductPage = () => {
  const { slug } = useParams();
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/" />;
  }

  const hasContent = product.content && product.content.trim().length > 0;

  const parseProductContent = (content) => {
    if (!content) return [];
    // Normalize newlines and split by empty lines
    const blocks = content.split(/\n\s*\n/).map(block => block.trim()).filter(Boolean);
    
    const sections = [];
    let overviewBodyParts = [];
    let overviewListParts = [];

    blocks.forEach((block) => {
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) return;

      const firstLine = lines[0];
      const isHeader = firstLine.endsWith(':') || 
                       firstLine.toLowerCase().startsWith('who can apply') ||
                       firstLine.toLowerCase().startsWith('requirements') ||
                       firstLine.toLowerCase().startsWith('eligibility') ||
                       firstLine.toLowerCase().startsWith('benefits');

      if (isHeader) {
        const sectionTitle = firstLine.replace(/:$/, '').trim();
        const sectionItems = lines.slice(1);
        
        // Check if items are bullet points (e.g. starting with '·' or '-' or '*')
        const hasBullets = sectionItems.some(item => item.startsWith('·') || item.startsWith('-') || item.startsWith('*') || item.startsWith('.'));
        
        if (hasBullets) {
          sections.push({
            title: sectionTitle,
            list: sectionItems.map(item => item.replace(/^[·\-\*\.]\s*/, '').trim())
          });
        } else {
          sections.push({
            title: sectionTitle,
            body: sectionItems.join('\n')
          });
        }
      } else {
        // Unheaded blocks are collected under Overview
        const hasBullets = lines.some(line => line.startsWith('·') || line.startsWith('-') || line.startsWith('*') || line.startsWith('.'));
        if (hasBullets) {
          lines.forEach(line => {
            overviewListParts.push(line.replace(/^[·\-\*\.]\s*/, '').trim());
          });
        } else {
          if (lines.length > 1 && lines[0] === lines[0].toUpperCase() && lines[0].length < 50) {
            overviewBodyParts.push(lines.slice(1).join('\n'));
          } else {
            overviewBodyParts.push(block);
          }
        }
      }
    });

    const overviewSection = {
      title: "Overview",
    };
    if (overviewBodyParts.length > 0) {
      overviewSection.body = overviewBodyParts.join('\n\n');
    }
    if (overviewListParts.length > 0) {
      overviewSection.list = overviewListParts;
    }

    return [overviewSection, ...sections];
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div className="fixed inset-0 bg-white/86 backdrop-blur-[2px]" />

      <section className="relative z-10 px-5 pb-24 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden bg-white shadow-[0_35px_100px_rgba(0,0,0,0.18)]">
                <div className="bg-red-700 p-8 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-red-100">
                    {product.groupTitle}
                  </p>

                  <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em]">
                    {product.name}
                  </h1>
                </div>

                <div className="p-6">
                  {productGroups.map((group) => (
                    <div key={group.slug} className="mb-7 last:mb-0">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-red-700">
                        {group.title}
                      </p>

                      <div className="space-y-2">
                        {group.products.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/products/${item.slug}`}
                            className={`block border px-4 py-3 text-sm font-semibold transition ${
                              item.slug === product.slug
                                ? "border-red-700 bg-red-700 text-white"
                                : "border-slate-200 bg-[#f8f4ed] text-slate-600 hover:border-red-700 hover:bg-white hover:text-red-700"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              {/* Product Header Card */}
              <div className="bg-white/90 p-8 shadow-xl shadow-slate-900/5 border border-slate-100 backdrop-blur sm:p-10 relative overflow-hidden animate-[slideFromLeft_900ms_ease_both]">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700" />
                <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                  Product Details
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                  {product.name}
                </h2>
              </div>

              {hasContent ? (
                parseProductContent(product.content).map((section, index) => (
                  <article
                    key={`${section.title}-${index}`}
                    className={`group relative overflow-hidden bg-white/90 p-8 shadow-xl shadow-slate-900/5 border border-slate-100 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-10 ${
                      index % 2 === 0
                        ? "animate-[slideFromLeft_900ms_ease_both]"
                        : "animate-[slideFromRight_900ms_ease_both]"
                    }`}
                    style={{
                      animationDelay: `${index * 90}ms`,
                    }}
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />

                    <div className="flex flex-col gap-6">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em]">
                          {section.title}
                        </h3>

                        {section.body && (
                          <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate-600">
                            {section.body}
                          </p>
                        )}

                        {section.list && (
                          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {section.list.map((item, idx) => (
                              <li
                                key={`${item}-${idx}`}
                                className="flex gap-3 text-base leading-7 text-slate-600"
                              >
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="bg-white/90 p-8 shadow-xl shadow-slate-900/5 border border-slate-100 backdrop-blur sm:p-10 relative overflow-hidden animate-[slideFromRight_900ms_ease_both]">
                  <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                    Product information coming soon.
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    This page will be updated once the full content is available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes slideFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-80px) scale(0.98);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes slideFromRight {
            0% {
              opacity: 0;
              transform: translateX(80px) scale(0.98);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default ProductPage;