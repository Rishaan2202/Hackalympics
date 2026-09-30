

export default function handleSearch(input) {

    // const searchParams = useSearchParams();
    // const router = useRouter();
    // const pathname = usePathname();

  let message = "";

  const searchText = input;
  console.log("Search text:", searchText);

  items.filter((item) => {
    // if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
    //   console.log("Found item:", item);
    //   message = "Found ${item.length} items";
    //   return item;
    // } else {
    //   console.log("Item not found:", item);
    //   return [];
    // }
  });

}
