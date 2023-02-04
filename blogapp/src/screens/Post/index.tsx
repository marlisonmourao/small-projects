import { useState, useRef } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";

import { ProgressBar } from "../../components/ProgressBar";

type ScrollProps = {
  layoutMeasurement: {
    height: number
  };
  contentOffset: {
    y: number
  };
  contentSize: {
    height: number
  }
}

export function Post() {
  const [percentage, setPercentage] = useState(0)

  const dimensions = useWindowDimensions()
  const scrollRef = useRef<ScrollView>(null)

  function scrollPercentage({ contentSize, contentOffset, layoutMeasurement }: ScrollProps) {
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100)

    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100

    let percent = value < visibleContent ? 0 : value

    setPercentage(percent)
  }

  function hanldeScrollMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true
    })
  }

  return(
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
      <Text style={styles.title}>
        Lorem ipsum 
      </Text>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod doloribus possimus assumenda a sit soluta aliquid quis dignissimos maiores totam tempore debitis optio officia temporibus quo enim, sint modi!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente maxime sed ex laudantium, dignissimos accusantium fuga aliquam explicabo sunt in laborum fugit, quos voluptatem enim vero, reprehenderit animi obcaecati quia?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quo doloribus ea enim quibusdam voluptas eligendi nostrum fuga iure, a aperiam ullam error. Quis magni quas quibusdam temporibus expedita sequi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aliquid vel quia quae, dolores tempora itaque nulla temporibus iusto, explicabo officiis? Impedit voluptatem laudantium repellat sint officia corrupti quidem doloremque!
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
          </Text>


          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
          </Text>


          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
          </Text>


          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, accusamus eius quod recusandae adipisci reiciendis eos ab soluta numquam, commodi ipsam. Sint quae blanditiis officia at! Architecto voluptate soluta non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita neque velit, aliquid nam repudiandae porro doloribus cupiditate provident blanditiis cumque quo voluptates perferendis laudantium ab. Mollitia rerum perferendis dolorum praesentium?
          </Text>
        </View>
      </ScrollView>

      <ProgressBar
        value={percentage} 
        onMoveTop={hanldeScrollMoveTop}
       />
    </View>
  )
}