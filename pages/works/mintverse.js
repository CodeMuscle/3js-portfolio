import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Mintverse">
    <Container>
      <Title>
      Mintverse <Badge>2023</Badge>
      </Title>
      <P>CryptoKet is an NFT marketplace which let syou add, buy and sell NFTs of your choice using ETH as an exchange Web3 token.
      The NFTs are stored in an IPFS storage system called Infura and lets you view your NFTs using the Metamask wallet.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, TailwindCSS, Hardhat and Solidity</span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href="https://cryptoket-v2.vercel.app/" target="_blank">
            CryptoKet
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cryptoket-1-min.png" alt="cryptoket" />
      <WorkImage src="/images/works/cryptoket-2-min.png" alt="cryptoket" />
      <WorkImage src="/images/works/cryptoket-3-min.png" alt="cryptoket" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
