import {
    createThirdwebClient,
    getContract,
} from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID!,
});

// connect to your contract
const contract = getContract({
    client,
    chain: defineChain(80002),
    address: "0xf13d918289FF2Ed38c49eB0374F5ccb12cE6bcc3",
});

export { client, contract }
