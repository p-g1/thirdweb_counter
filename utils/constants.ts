import { createThirdwebClient, defineChain } from "thirdweb";
import { Ethereum } from "@thirdweb-dev/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

export const client = createThirdwebClient({ clientId: CLIENT_ID as string || "" });

export const chain = Ethereum;
