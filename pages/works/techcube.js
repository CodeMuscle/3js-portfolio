import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  // UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TechCube">
    <Container>
      <Title>
        Techcube <Badge>2022</Badge>
      </Title>
      <P>
        Techcube is your go to website to purchase gadgets of your choice. Built using React and Next.js, it extremely fasta nd responsive. Payments are also accepted using the integration of Stripe.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href="https://ecommerce-sanity-iazhel55f-codemuscle.vercel.app/">
              Techcube
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Node.js, Stripe</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      {/* <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/techcube-1-min.png" alt="techcube" />
        <WorkImage src="/images/works/techcube-2-min.png" alt="techcube" />
      </SimpleGrid>
      <WorkImage src="/images/works/techcube-3-min.png" alt="techcube" />
      <WorkImage src="/images/works/techcube-4-min.png" alt="techcube" />
      <WorkImage src="/images/works/techcube-5-min.png" alt="techcube" />
      <WorkImage src="/images/works/techcube-6-min.png" alt="techcube" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
