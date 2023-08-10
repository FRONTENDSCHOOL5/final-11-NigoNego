import MyHomePost from './MyHomePost';

export default function YourHomePost({ accountname }) {
  console.log(accountname);
  return <MyHomePost accountname={accountname} />;
}
