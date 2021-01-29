(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(6),i=(n(0),n(110)),r={title:"Frequently Asked Questions",slug:"/faq",hide_table_of_contents:!0},s={unversionedId:"faq/faq",id:"faq/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:'Is it "ink" or "ink!"? What does the "!" stand for?',source:"@site/docs/faq/faq.md",slug:"/faq",permalink:"/ink-docs/faq",editUrl:"https://github.com/ink-docs/edit/master/docs/faq/faq.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/ink-docs/canvas"}},c=[{value:"Is it &quot;ink&quot; or &quot;ink!&quot;? What does the &quot;!&quot; stand for?",id:"is-it-ink-or-ink-what-does-the--stand-for",children:[]},{value:"Who is &quot;Squink&quot;?",id:"who-is-squink",children:[]},{value:"What&#39;s ink!&#39;s relationship to Substrate/Polkadot?",id:"whats-inks-relationship-to-substratepolkadot",children:[]},{value:"How to call other smart contracts on the same blockchain?",id:"how-to-call-other-smart-contracts-on-the-same-blockchain",children:[]},{value:"How to call other smart contracts on another parachain?",id:"how-to-call-other-smart-contracts-on-another-parachain",children:[]},{value:"What is a contract&#39;s ABI or Metadata?",id:"what-is-a-contracts-abi-or-metadata",children:[]},{value:"Can a re-entrancy bug occur in ink! contracts?",id:"can-a-re-entrancy-bug-occur-in-ink-contracts",children:[]},{value:"How can my smart contract interact with the runtime?",id:"how-can-my-smart-contract-interact-with-the-runtime",children:[]},{value:"How can I use ink! with a Substrate chain with a custom chain config?",id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config",children:[]},{value:"What does the <code>#![cfg_attr(not(feature = &quot;std&quot;), no_std)]</code> at the beginning of each contract mean?",id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean",children:[]},{value:"Overflow Safety?",id:"overflow-safety",children:[]},{value:"What is the difference between memory and storage?",id:"what-is-the-difference-between-memory-and-storage",children:[]},{value:"How do I print something to the console from the runtime?",id:"how-do-i-print-something-to-the-console-from-the-runtime",children:[]},{value:"Is it possible to do <code>println!(&quot;{:?}&quot;, foo)</code> on-chain for debugging purposes?",id:"is-it-possible-to-do-println-foo-on-chain-for-debugging-purposes",children:[]},{value:"Why is Rust&#39;s standard library (stdlib) not available in ink!?",id:"why-is-rusts-standard-library-stdlib-not-available-in-ink",children:[]},{value:"Why is <code>nightly</code> required for ink!?",id:"why-is-nightly-required-for-ink",children:[]},{value:"How do I hash a value?",id:"how-do-i-hash-a-value",children:[]},{value:"When to use <code>Lazy&lt;T&gt;</code> over just <code>T</code> for a contract field?",id:"when-to-use-lazyt-over-just-t-for-a-contract-field",children:[]},{value:"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?",id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number",children:[]},{value:"Why can&#39;t I just use the standard Rust data collections in ink!?",id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink",children:[]}],l={rightToc:c};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"is-it-ink-or-ink-what-does-the--stand-for"},'Is it "ink" or "ink!"? What does the "!" stand for?'),Object(i.b)("p",null,'The DSL (domain specific language) is spelled "ink!" with small "i" and an exclamation mark at the end.\nThe main purpose behind this spelling is to have as many dots in its name as possible.'),Object(i.b)("h3",{id:"who-is-squink"},'Who is "Squink"?'),Object(i.b)("div",{class:"squid-container"},Object(i.b)("img",{src:"./img/ink-squid.svg",alt:"Squink \u2012 the ink! mascot",class:"squid"}),"This little cute purle squid is Squink.",Object(i.b)("p",null,"Squink is the mascot of ink! and guides new users and adventurers through our presentations\nworkshops and tutorials. It also has a romance with Rust's mascot, Ferris."),Object(i.b)("p",null,"Generally it is very friendly and open to learning new Rustaceans but be aware to never upset\nit by taking away dots from the word ink! by spelling it incorrectly!\nIt really is into dots. Stories tell that it demanded the spelling of ink! with as many dots as possible.")),Object(i.b)("h3",{id:"whats-inks-relationship-to-substratepolkadot"},"What's ink!'s relationship to Substrate/Polkadot?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Substrate is a modular framework to build decentralized applications on top of blockchain technology."),Object(i.b)("li",{parentName:"ul"},"Polkadot is a layer-0 blockchain built using Substrate that allows to orchestrate an entire\nfleet of other blockchains to join forces and communicate with each other."),Object(i.b)("li",{parentName:"ul"},"Blockchains built with Substrate can include the so-called ",Object(i.b)("inlineCode",{parentName:"li"},"contracts-pallet")," module in order to\nallow instantiating and executing smart contracts.")),Object(i.b)("p",null,"ink! was built to allow users to write smart contracts in Rust targeting blockchains built by\nSubstrate that have the aforementioned ",Object(i.b)("inlineCode",{parentName:"p"},"contracts-pallet")," included."),Object(i.b)("p",null,"While ink! is currently the most advanced smart contract language targeting Substrate blockchains it is\nnot the only possible choice for users. There is also a Solidity to Wasm compiler called Solang that also\nallows to target Substrate chains and there are other languages in plan and discovery phase for the same\npurpose."),Object(i.b)("p",null,"On the Substrate side the same is true for the ",Object(i.b)("inlineCode",{parentName:"p"},"contracts-pallet"),". It is just a module that defines\nthe basic set of features required for executing smart contracts on the blockchain that includes it.\nHowever, it is not necessarily the only solution to do exactly that. There is also the ",Object(i.b)("inlineCode",{parentName:"p"},"evm-pallet"),"\nto run smart contracts targeting the EVM as well as the experimental ",Object(i.b)("inlineCode",{parentName:"p"},"actors-pallet")," that allows to\nexecute smart contracts written in the actor style programming model.\nOver time the Substrate community might come up with yet other pallets for smart contracts execution. "),Object(i.b)("h3",{id:"how-to-call-other-smart-contracts-on-the-same-blockchain"},"How to call other smart contracts on the same blockchain?"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/basics/cross-contract-calling"}),"Cross-contract calling")," section."),Object(i.b)("h3",{id:"how-to-call-other-smart-contracts-on-another-parachain"},"How to call other smart contracts on another parachain?"),Object(i.b)("p",null,"This feature has not yet been implemented by the Substrate side."),Object(i.b)("h3",{id:"what-is-a-contracts-abi-or-metadata"},"What is a contract's ABI or Metadata?"),Object(i.b)("p",null,"In ink! a smart contract's metadata is retrieved by using the ",Object(i.b)("inlineCode",{parentName:"p"},"cargo-contract")," CLI tool and\ninvoking ",Object(i.b)("inlineCode",{parentName:"p"},"cargo contract build")," which outputs a ",Object(i.b)("inlineCode",{parentName:"p"},".contract")," file that includes both the compiled\n",Object(i.b)("inlineCode",{parentName:"p"},".wasm")," of the ink! smart contract as well as the so-called metadata information of the same\nsmart contract.\nThe metadata is especially important for third party tools such as Polkadot JS Apps or the Canvas UI\nand provides useful information about the contract's constructors, messages, events, function selectors,\ndocumentation and comments of the aforementioned structures as well as how inputs and outputs shall\nbe encoded and decoded respectively etc."),Object(i.b)("h3",{id:"can-a-re-entrancy-bug-occur-in-ink-contracts"},"Can a re-entrancy bug occur in ink! contracts?"),Object(i.b)("p",null,"Yes. However, the Substrate team is well aware of the associated problems and already through about\npossible future additions to eliminate re-entrancy attacks."),Object(i.b)("h3",{id:"how-can-my-smart-contract-interact-with-the-runtime"},"How can my smart contract interact with the runtime?"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/macros-attributes/chain-extension"}),"Chain Extensions")," section for more information."),Object(i.b)("h3",{id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config"},"How can I use ink! with a Substrate chain with a custom chain config?"),Object(i.b)("p",null,"Please see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_lang_macro/attr.contract.html#header-arguments"}),"the ",Object(i.b)("inlineCode",{parentName:"a"},"env_types")," argument"),"\nfor the contract macro. It allows you to specify your environment a la\n",Object(i.b)("inlineCode",{parentName:"p"},"#[ink::contract(env = MyEnvironment)]"),"."),Object(i.b)("h3",{id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean"},"What does the ",Object(i.b)("inlineCode",{parentName:"h3"},'#![cfg_attr(not(feature = "std"), no_std)]')," at the beginning of each contract mean?"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"#[cfg(..)]")," or ",Object(i.b)("inlineCode",{parentName:"p"},"#[cfg_attr(..)]")," annotations are how Rust does conditional compilation."),Object(i.b)("p",null,"ink! smart contracts can be compiled in two different modes."),Object(i.b)("p",null,"Through ",Object(i.b)("inlineCode",{parentName:"p"},'#![cfg_attr(not(feature = "std"), no_std)]')," an ink! smart contract tells the Rust compiler\nin which mode they are being compiled. This also plays a significant role in how ink! generates\nthe smart contract code."),Object(i.b)("p",null,"The two modes are as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Wasm mode: This is the mode chosen when compiling an ink! smart contract for deployment on a blockchain.\nThe resulting binary is a ",Object(i.b)("inlineCode",{parentName:"li"},".wasm")," file and as such it is not possible to use certain parts of Rust's standard\nlibrary."),Object(i.b)("li",{parentName:"ol"},"Off-chain mode: This is the mode chosen when trying to test an ink! smart contract using the off-chain\nenvironment. Off-chain environment testing is very useful to check if certain ink! constructors or messages\nare well behaving and allow for better debuggability than when trying to debug the same smart contract deployed\non a chain.")),Object(i.b)("h3",{id:"overflow-safety"},"Overflow Safety?"),Object(i.b)("p",null,'Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/primitive.u32.html"}),"integrated checked, wrapped, and saturated math functions"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the Wasm blob. This feature may change or be iterated on in the future.")),Object(i.b)("h3",{id:"what-is-the-difference-between-memory-and-storage"},"What is the difference between memory and storage?"),Object(i.b)("p",null,"In ink!, memory refers to computer memory, while storage refers to the on-chain storage\nused by a contract instance. Memory is temporary and only lasts until the contract\nexecution is done, while storage is persistent and lasts over many contract executions.\nThe contract storage is built on top of the runtime storage, and access is considered to be slow."),Object(i.b)("h3",{id:"how-do-i-print-something-to-the-console-from-the-runtime"},"How do I print something to the console from the runtime?"),Object(i.b)("p",null,"In your ink! message or constructor write the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(constructor)]\nfn print_contents_1(contents: &str) -> Self {\n    Self::env().debug_println(contents);\n    Self { .. }\n}\n\n#[ink(message)]\nfn print_contents_2(&self, contents: &str) {\n    self.env().debug_println(contents);\n}\n")),Object(i.b)("p",null,"Note that this will only print to console if the smart contract is either tested off-chain\nor if it is run on an on-chain with ",Object(i.b)("inlineCode",{parentName:"p"},"--dev")," (development) configuration. Trying to deploy a smart contract\nthat uses ",Object(i.b)("inlineCode",{parentName:"p"},"debug_println")," will always fail for non ",Object(i.b)("inlineCode",{parentName:"p"},"--dev")," chains."),Object(i.b)("h3",{id:"is-it-possible-to-do-println-foo-on-chain-for-debugging-purposes"},"Is it possible to do ",Object(i.b)("inlineCode",{parentName:"h3"},'println!("{:?}", foo)')," on-chain for debugging purposes?"),Object(i.b)("p",null,"The ink! team has not yet provided a cleaner solution than using ",Object(i.b)("inlineCode",{parentName:"p"},"self.env().debug_println(..)")," as mentioned\nin the last question.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"debug_println")," method only takes a static ",Object(i.b)("inlineCode",{parentName:"p"},"str")," argument which cannot be formatted.\nHowever, it is possible to use Rust's ",Object(i.b)("inlineCode",{parentName:"p"},"format!")," macro in order to have the same benefits in the end:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'#[ink(message)]\nfn print_formatted(&self, contents: &str) {\n    self.env().debug_println(&format!("message: {}", contents));\n}\n')),Object(i.b)("p",null,"Note that it might be required to import the ",Object(i.b)("inlineCode",{parentName:"p"},"format!")," macro from the ",Object(i.b)("inlineCode",{parentName:"p"},"ink_prelude")," crate first."),Object(i.b)("h3",{id:"why-is-rusts-standard-library-stdlib-not-available-in-ink"},"Why is Rust's standard library (stdlib) not available in ink!?"),Object(i.b)("p",null,"Rust's standard library consists of three different layers:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"core")," library which defines everything that has no dependencies outside of Rust itself.\nIncluded are types such as ",Object(i.b)("inlineCode",{parentName:"p"},"Option"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Result")," as well as a whole variety of modules,\nfunctions and macro."),Object(i.b)("p",{parentName:"li"},"ink! smart contracts allow authors to use Rust's ",Object(i.b)("inlineCode",{parentName:"p"},"core")," crate.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"alloc")," library which is depending on a global allocator and mainly defines collections\nthat spill their elements on to the execution's heap memory.\nExamples for collections are ",Object(i.b)("inlineCode",{parentName:"p"},"Box"),", ",Object(i.b)("inlineCode",{parentName:"p"},"String"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Vec"),", ",Object(i.b)("inlineCode",{parentName:"p"},"HashMap"),", ",Object(i.b)("inlineCode",{parentName:"p"},"LinkedList")," and modules\nsuch as ",Object(i.b)("inlineCode",{parentName:"p"},"fmt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"rc")," (ref-counted pointers) or borrows."),Object(i.b)("p",{parentName:"li"},"ink! smart contracts allow authors to use Rust's ",Object(i.b)("inlineCode",{parentName:"p"},"alloc")," crate.\nBy default ink! authors use definitions from the ",Object(i.b)("inlineCode",{parentName:"p"},"alloc")," crate through ",Object(i.b)("inlineCode",{parentName:"p"},"ink_prelude")," crate.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"std")," library is what people generally call Rust's standard library."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"The Rust Standard Library is the foundation of portable Rust software, a set of minimal and battle-tested shared abstractions for the broader Rust ecosystem.")),Object(i.b)("p",{parentName:"li"},"It requires several operating system capabilities in order to work correctly such as input and\noutput systems for files, networking etc."),Object(i.b)("p",{parentName:"li"},"Since the Wasm (a.k.a. ",Object(i.b)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown"),") compilation target does not support Rust's\nstandard library ink! authors cannot use it either for their own purposes. Instead the ",Object(i.b)("inlineCode",{parentName:"p"},"contracts-pallet"),"\ntries to provide some common functionality that would otherwise be missing for common smart contract\noperations."))),Object(i.b)("h3",{id:"why-is-nightly-required-for-ink"},"Why is ",Object(i.b)("inlineCode",{parentName:"h3"},"nightly")," required for ink!?"),Object(i.b)("p",null,"ink! requires a ",Object(i.b)("inlineCode",{parentName:"p"},"nightly")," Rust compiler as of 2021-01 since it relies on a few unstable nightly features\naround allocation handlers for ",Object(i.b)("inlineCode",{parentName:"p"},"no_std")," (no standard library) code."),Object(i.b)("p",null,"As soon as the Rust team decides to stabilize these features ink! will be available for stable Rust."),Object(i.b)("h3",{id:"how-do-i-hash-a-value"},"How do I hash a value?"),Object(i.b)("p",null,"A number of crypto hashes are built into the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./how-it-works"}),"contracts-pallet")," and\ntherefore very efficient to use. We currently support a handful of those, you\ncan view the complete list ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_env/hash/trait.CryptoHash.html"}),"here"),"."),Object(i.b)("p",null,"If you have the urgent need for another crypto hash you could introduce it through\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/macros-attributes/chain-extension"}),"Chain Extensions"),"\nor make a proposal to include it into the default set of the ",Object(i.b)("inlineCode",{parentName:"p"},"contracts-pallet"),"."),Object(i.b)("p",null,"Using one of the built-in crypto hashes an be done like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_env::hash::Blake2x256;\n\nlet hashed1: [u8; 32] = self.env().hash_bytes::<Blake2x256>(my_bytes);\nlet hashed2: [u8; 32] = self.env().hash_encoded::<Blake2x256>(42);\n")),Object(i.b)("h3",{id:"when-to-use-lazyt-over-just-t-for-a-contract-field"},"When to use ",Object(i.b)("inlineCode",{parentName:"h3"},"Lazy<T>")," over just ",Object(i.b)("inlineCode",{parentName:"h3"},"T")," for a contract field?"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," type caches their entities and acts lazily on the storage.\nThis means that a read or write operation is only performed when it really needs to\nin order to satisfy other inputs."),Object(i.b)("p",null,"Data types such as Rust primitives ",Object(i.b)("inlineCode",{parentName:"p"},"i32")," or Rust's very own ",Object(i.b)("inlineCode",{parentName:"p"},"Vec")," or data structures\ncan also be used to operate on the contract's storage, however, they will load their\ncontents eagerly which is often not what you want."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/datastructures/overview"}),"See this chapter")," where we go into more details and provide examples."),Object(i.b)("h3",{id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number"},"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?"),Object(i.b)("p",null,"Floats are cool for all kinds of reasons, but they also have one important\ndrawback. Floating point arithmetic is non-deterministic which means that\ndifferent processors compute (slightly) different results for the same\noperation. Although there is an IEEE spec, non-determinism can come from specific\nlibraries used, or even hardware. In order for the nodes in a blockchain network\nto reach agreement on the state of the chain, all operations must be completely\ndeterministic. Hence we don't allow floating point data types in ink!."),Object(i.b)("p",null,"Consequently it's not possible to return a decimal number from an ink! message.\nWhat you should do instead is to have your user interface denominate the returned\nnumber to decimals."),Object(i.b)("p",null,"Note, that it's typical for blockchains to have the number of available tokens\ndefined as a non-floating number and determine the denomination in the user\ninterface. For example, 1 Bitcoin is equivalent to the smallest unit of 100,000,000\nSatoshi and all Bitcoin implementations internally persist account balances in\nSatoshi, not as a decimal number of Bitcoin."),Object(i.b)("h3",{id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink"},"Why can't I just use the standard Rust data collections in ink!?"),Object(i.b)("p",null,"You can use them! They are exposed via the ",Object(i.b)("inlineCode",{parentName:"p"},"ink_prelude")," crate (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec"),")\nand you can return them from ink! messages and also persist them to storage."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"However, the Rust stdlib collections are not optimized for smart contract usage!")," So for example,\nif you use them to persist your data on the chain they will always occupy a single storage cell\nand thus always be loaded eagerly, in their entirety. This can be very costly! Just think about\na ",Object(i.b)("inlineCode",{parentName:"p"},"Vec")," or a ",Object(i.b)("inlineCode",{parentName:"p"},"HashMap")," where the smart contract might only need access to a few elements, rather\nthan the entire data collection."),Object(i.b)("p",null,"Our ",Object(i.b)("inlineCode",{parentName:"p"},"ink_storage")," data structures on the other hand are optimized for storage and provide a\ndifferentiation between lazy and eager access."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/datastructures/overview"}),"See this chapter")," where we go into more details and provide examples."))}h.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(n),u=a,p=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(p,s(s({ref:t},l),{},{components:n})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);