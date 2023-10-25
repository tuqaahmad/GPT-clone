import { useRef, useEffect } from 'react'
import Layout from '../components/common/Layout'

export default function Home() {
  const chatDivRef = useRef(null)

  const chats = [
    {
      type: 'user',
      msg: 'Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man ',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man ',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man ',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man ',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man ',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man Hello man ',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
    {
      type: 'user',
      msg: 'Hello man',
      img: 'https://thispersondoesnotexist.com/',
    },
    {
      type: 'bot',
      msg: 'Hello',
      img: 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png',
    },
  ]

  const scrollToBottom = () => {
    if (chatDivRef.current) {
      chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [chats])

  return (
    <Layout>
      <div className="relative ">
        <div className="overflow-auto h-screen pb-32" ref={chatDivRef}>
          {chats.map((item) => {
            return (
              <div
                className={`py-2 ${
                  item.type == 'user' ? 'bg-gray-100' : 'bg-white'
                }`}
              >
                <div className="flex max-w-5xl mx-auto">
                  <img
                    src={item.img}
                    className="h-10 w-10 rounded-lg my-auto mx-2 object-cover"
                  />
                  <div className="mx-1 w-full p-3 rounded-lg">{item.msg}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex">
          <input
            className="bg-white w-full rounded-lg py-5 border px-3"
            placeholder="ask here..."
          />
          <button className="bg-indigo-600 px-7 rounded-lg mx-2 text-white my-auto py-3">
            send
          </button>
        </div>
      </div>
    </Layout>
  )
}
