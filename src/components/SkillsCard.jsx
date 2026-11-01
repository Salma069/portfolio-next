export default function SkillCard({ nama, level }) {
  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white dark:bg-gray-900 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-utama dark:text-blue-300">{nama}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Level {level} </p>
      </div>
    </>
  );
}
