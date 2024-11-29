import {
  AnimatedHorizontalSlider,
  Badge,
  BetButton,
  Box,
  Button,
  Card,
  CheckBox,
  SIZE,
  TennisiMDSWrapper,
  Text,
  HorizontalSlider,
  CodeInput,
  Counter,
  MatchBetButtonsRow,
  MatchBanner,
  MatchResultCard,
  RadioGroup,
  SegmentedControl,
  Switch,
} from 'react-native-tennisi-mobile-ds';
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <TennisiMDSWrapper>
      <Entry />
    </TennisiMDSWrapper>
  );
}

const Entry = () => {
  const [code, setCode] = useState('');
  return (
    <Box backgroundColor={'backgroundPrimary'} flex={1}>
      <ScrollView>
        <Box pt={'x12'} mt={'x4'} px={'x5'} pb={'x12'}>
          <Box mx={'-x5'}>
            <AnimatedHorizontalSlider
              data={[1, 2, 3]}
              renderItem={(_, index) => (
                <Text
                  style={{
                    width: SIZE.width * 0.9,
                    height: 100,
                    backgroundColor: 'green',
                  }}
                >
                  {index}
                </Text>
              )}
              itemWidth={SIZE.width * 0.9}
            />
            <HorizontalSlider
              data={[1, 2, 3]}
              renderItem={(_, index) => (
                <Text
                  style={{
                    width: SIZE.width * 0.9,
                    height: 100,
                    backgroundColor: 'gray',
                  }}
                >
                  {index}
                </Text>
              )}
            />
          </Box>
          <Text variant={'header-xxl'}>Text</Text>
          <Text variant={'header-m'}>Text</Text>
          <Text variant={'header-xs'}>Text</Text>
          <Badge text={'Badge'} />
          <Badge text={'Badge'} variant={'filled-s'} />
          <Badge text={'Badge'} variant={'filled-m'} />
          <Card
            variant={'bordered'}
            alignSelf={'stretch'}
            height={100}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text>CARD</Text>
          </Card>
          <BetButton title={'Title'} value={'Value'} />
          <Button label={'123'} />
          <CheckBox
            checked={true}
            onValueChange={() => {}}
            label={'Checkbox'}
          />
          <CodeInput value={code} onChange={setCode} />
          <Counter text={'Counter'} />
          <MatchBanner buttons />
          <RadioGroup
            selectedId={'1'}
            buttons={[
              { value: '1', label: 'Label1' },
              { value: '2', label: 'Label2' },
              { value: '3', label: 'Label3' },
            ]}
          />
          <MatchBetButtonsRow
            variant={'default'}
            buttons={[
              { title: 'X2', value: '2' },
              { title: 'X2', value: '2' },
              { title: 'X2', value: '2' },
              { title: 'X2', value: '2' },
              { title: 'X2', value: '2' },
            ]}
          />
          <MatchResultCard />
          <SegmentedControl values={['1', '2', '3']} />
          <Switch description={'Description'} value={true} />
        </Box>
      </ScrollView>
    </Box>
  );
};
