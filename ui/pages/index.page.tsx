
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import type { Add } from '../../contracts/src/';
import {
  Mina,
  isReady,
  PublicKey,
  fetchAccount,
} from 'snarkyjs';

export default function Home() {
  useEffect(() => {
    (async () => {
      await isReady;
      const { Add } = await import('../../contracts/build/src/');

      // Update this to use the address (public key) for your zkApp account
      // To try it out, you can try this address for an example "Add" smart contract that we've deployed to 
      // Berkeley Testnet B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4
      const zkAppAddress = 'B62qqamYuMktYrwwBG8ApXA4ivAzBghXRpXZpXHsJSENTiXNYReWSHY';
      // This should be removed once the zkAppAddress is updated.
      if (!zkAppAddress) {
        console.error(
          'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4'
        );
      }

      const zkAppInstance = new Add(PublicKey.fromBase58(zkAppAddress));
      
    })();
  }, []);

}

