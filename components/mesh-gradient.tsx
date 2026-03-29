export function MeshGradient() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(at 40% 20%, rgba(30, 30, 40, 1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(20, 20, 30, 1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(25, 25, 35, 1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(35, 35, 45, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(20, 20, 28, 1) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgba(28, 28, 38, 1) 0px, transparent 50%),
          radial-gradient(at 50% 50%, rgba(40, 40, 50, 0.5) 0px, transparent 70%)
        `,
        backgroundColor: "#0a0a0c",
      }}
    />
  );
}
