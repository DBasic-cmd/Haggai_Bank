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

            <article className="overflow-hidden bg-white px-6 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.22)] sm:px-10 lg:px-14">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                Product Details
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                {product.name}
              </h2>

              <div className="my-10 h-px bg-slate-200" />

              {hasContent ? (
                <p className="whitespace-pre-line text-[20px] leading-[1.65] text-slate-600">
                  {product.content}
                </p>
              ) : (
                <div className="bg-[#f8f4ed] p-8">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                    Product information coming soon.
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    This page will be updated once
                    the full content is available.
                  </p>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;