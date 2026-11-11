export default function Kartu ({judul, children}) {
    return (
        <section className="rounded-xl p-6 shadow-lg md: grid-cols-3">
            <h2 className="mb-3 text-2xl font-bold text-utama dark:text-blue-200"> {judul} </h2>
            {children}
        </section>
    );
}