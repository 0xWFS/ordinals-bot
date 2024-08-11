'use client';
import { truncateString } from '@/helpers';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';
import Wallet, { AddressPurpose, request, RpcErrorCode } from 'sats-connect';

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [connected, setConnected] = useState<boolean>(false);

  const handleConnect = async () => {
    try {
      const response = await request('getAccounts', {
        purposes: [AddressPurpose.Payment],
        message: 'Ordinals Test: Need you to connect your wallet please!',
      });
      console.log('getAccounts ~ response:', response);
      if (response.status === 'success') {
        const paymentAddressItem = response.result.find(
          (address) => address.purpose === AddressPurpose.Payment
        );
        setWalletAddress(paymentAddressItem?.address as string);
        setConnected(true);
      } else {
        if (response.error.code === RpcErrorCode.USER_REJECTION) {
          // handle user cancellation error
          console.log('USER CANCELLED');
        } else {
          // handle error
          console.log('ANOTHER ERROR');
        }
      }
    } catch (err) {
      console.log('Error Connecting Wallet', err);
    }
  };

  const disconnectWallet = async () => {
    try {
      await Wallet.request('wallet_renouncePermissions', undefined);
      setConnected(false);
      setWalletAddress('');
    } catch (err) {
      console.log('Unable to Disconnect', err);
    }
  };

  return (
    <div className="bg-slate-200 rounded-lg p-2">
      {connected && walletAddress ? (
        <div className="text-right">
          <Menu>
            <MenuButton className="w-32 inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              {truncateString(walletAddress)}
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-32 mt-5 origin-top-right rounded-xl border border-slate-600 bg-gray-700 text-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <div className="text-xs py-5 px-2 flex flex-col justify-between items-start gap-5 text-wrap">
                  <div className='flex flex-col gap-1 text-wrap w-full'>
                    <p className='font-semibold'>
                      Wallet Address: 
                    </p>
                    <p className="break-words italic">{walletAddress}</p>
                  </div>
                  <button
                    className="bg-white py-1 px-2 w-full text-black rounded-xl"
                    onClick={disconnectWallet}
                  >
                    Disconnect
                  </button>
                </div>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      ) : (
        <button onClick={handleConnect}>
          <span className="text-sm">Connect Wallet</span>
        </button>
      )}
    </div>
  );
}
