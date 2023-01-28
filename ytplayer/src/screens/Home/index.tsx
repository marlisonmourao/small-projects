import { useState } from 'react';
import { View, ActivityIndicator, useWindowDimensions } from 'react-native';

import YoutubeIframe from 'react-native-youtube-iframe';

import { styles } from './styles';
import { VIDEO_HEIGHT, SCREEN_SPACE } from './styles';

export function Home() {
  const [videoReady, setVideoReady] = useState(false)

  const { width } = useWindowDimensions()
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2)

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe 
          videoId='nNvxERiVb_s'
          width={VIDEO_WIDTH}
          height={videoReady ? VIDEO_HEIGHT : 0}
          onReady={() => setVideoReady(true)}
        />

        {!videoReady && <ActivityIndicator color="red" />}
      </View>
    </View>
  );
}