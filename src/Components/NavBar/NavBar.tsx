import WalletConnect from '../Wallet/WalletConnect';

export default function NavBar() {
  return (
    <div className="w-full h-20 bg-slate-300 flex justify-between drop-shadow-xl items-center px-2 md:px-10">
      <div className="">
        <h1 className="text-xl md:text-3xl">Ordinals Bot</h1>
      </div>
      <WalletConnect />
    </div>
  );
}
