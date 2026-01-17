import Section from "@/components/layout/Section";
import { site } from "@/lib/site";

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions, answered."
      subtitle="Keep this tight. Add more only when you hear repeated objections."
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
        {site.faq.map((item) => (
          <details key={item.q} className="group p-6">
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-slate-400 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
