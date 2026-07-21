import { useState } from "react";

import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import contacts from "../Data/contact";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");
    console.log(form);
    try {
      await emailjs.send(
        "service_yaxkeao",
        "template_9agvtbm",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "BmAT_XTXkqRwLzrq9",
      );

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" bg-slate-900/60 backdrop-blur-sm p-5 lg:p-10">
      {/* HEADING */}

      <h2 className="orbitron text-center lg:text-left lg:ml-6 mb-4 text-4xl text-cyan-400">
        Let's Connect
      </h2>

      {/* ALL THE CONTACT DETAILS.............................................................. */}
      <div className="mx-auto grid max-w-7xl gap-8  lg:grid-cols-[350px_1fr]">
        <div className="space-y-6 rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-md shadow-2xl shadow-slate-950">
          {contacts.map(({ title, href, value, icon: Icon }) => (
            <div
              className="flex items-center gap-4 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-4
             hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <Icon className="text-3xl hover:scale-110 transition text-cyan-400" />

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  {title}
                </p>

                <a
                  href={href}
                  target="blank"
                  className="text-white hover:text-cyan-300"
                >
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FORM SO ANYONE CAN CONTACT ME........................................................................... */}

        <div>
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-md shadow-2xl shadow-slate-950">
            <h2 className="orbitron text-2xl text-cyan-400">Send a Message</h2>

            <p className="mt-2 mb-8 text-slate-400">
              Have an opportunity or project in mind? I'd love to hear from you.
            </p>

            {success && (
              <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <h3 className="font-semibold text-emerald-400">
                  ✓ Message Sent Successfully
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            )}
            {error && (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                <p className="text-red-400">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full resize-none rounded-lg border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3
                 font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400"
              >
                <FiSend
                  className={loading ? "" : "transition hover:translate-x-1"}
                />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5">
        <h3 className="mb-4 orbitron text-lg text-cyan-400">Available For</h3>

        <ul className="space-y-3 text-slate-300">
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Full-Time Opportunities
          </li>

          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Internships
          </li>

          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Freelance Projects
          </li>
        </ul>
      </div>
    </section>
  );
}
