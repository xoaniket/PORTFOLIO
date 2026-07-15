export default function Corners() {
  return (
    <div>
      <div className="absolute -left-1 -top-1 h-6 w-6 border-l-2 border-t-2 border-cyan-400" />
      <div className="absolute -right-1 -top-1 h-6 w-6 border-r-2 border-t-2 border-cyan-400" />
      <div className="absolute -left-1 -bottom-1 h-6 w-6 border-l-2 border-b-2 border-cyan-400" />
      <div className="absolute -right-1 -bottom-1 h-6 w-6 border-r-2 border-b-2 border-cyan-400" />
    </div>
  );
}
