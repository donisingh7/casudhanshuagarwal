import { useState } from "react"; 

export default function SubmitResume() {
  const [loading, setLoading] = useState(false); 
  const mail = "financesaarthi1@gmail.com";

  const handleResumeSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      setLoading(true); // NEW
      const API = import.meta.env.VITE_API_URL || ""; 
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 20000); 
      const res = await fetch(`${API}/api/resume`, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
      clearTimeout(t);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to submit resume");
      alert("Resume submitted!");
      form.reset();
    } catch (err) {
      alert(`Failed to submit resume: ${err?.name === "AbortError" ? "Timed out" : err?.message || err}`);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container-xl">
        <h1 className="h2">Submit Resume</h1>
        <p className="mt-2 muted">
          Please share your details below. We typically respond within 3–5 business days.
        </p>

        <form
          onSubmit={handleResumeSubmit}
          encType="multipart/form-data"
          className="mt-6 grid gap-4 rounded-2xl ring-1 ring-slate-200 bg-slate-50 p-5 sm:p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input name="name" required className="mt-1 w-full border rounded-lg p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border rounded-lg p-2.5" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" required className="mt-1 w-full border rounded-lg p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Role (Optional)</label>
              <input name="role" className="mt-1 w-full border rounded-lg p-2.5" placeholder="e.g., Audit Associate" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Resume (PDF)</label>
            <input type="file" name="resume" accept=".pdf" required className="mt-1 w-full border rounded-lg p-2.5 bg-white" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Message (Optional)</label>
            <textarea name="message" rows="4" className="mt-1 w-full border rounded-lg p-2.5" />
          </div>

          <div className="flex gap-3">
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Submitting…" : "Submit"}
            </button>
            <a href={`mailto:${mail}`} className={`btn-outline ${loading ? "pointer-events-none opacity-70" : ""}`}>Email Instead</a>
          </div>
        </form>
      </div>
    </section>
  );
}
