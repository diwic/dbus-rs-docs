(function() {var implementors = {};
implementors["dbus"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.BusType.html' title='dbus::BusType'>DBusBusType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.NameFlag.html' title='dbus::NameFlag'>DBusNameFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.RequestNameReply.html' title='dbus::RequestNameReply'>DBusRequestNameReply</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.ReleaseNameReply.html' title='dbus::ReleaseNameReply'>DBusReleaseNameReply</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.MessageType.html' title='dbus::MessageType'>DBusMessageType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.WatchEvent.html' title='dbus::WatchEvent'>DBusWatchEvent</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.ArrayError.html' title='dbus::ArrayError'>ArrayError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.OwnedFd.html' title='dbus::OwnedFd'>OwnedFd</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/enum.MessageItem.html' title='dbus::MessageItem'>MessageItem</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.Watch.html' title='dbus::Watch'>Watch</a>","impl&lt;'a, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='dbus/arg/trait.DictKey.html' title='dbus::arg::DictKey'>DictKey</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='dbus/arg/trait.Arg.html' title='dbus::arg::Arg'>Arg</a>, I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/arg/struct.Dict.html' title='dbus::arg::Dict'>Dict</a>&lt;'a, K, V, I&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/arg/struct.Variant.html' title='dbus::arg::Variant'>Variant</a>&lt;T&gt;","impl&lt;'a, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/arg/struct.Array.html' title='dbus::arg::Array'>Array</a>&lt;'a, T, I&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/arg/struct.IterAppend.html' title='dbus::arg::IterAppend'>IterAppend</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/arg/struct.TypeMismatchError.html' title='dbus::arg::TypeMismatchError'>TypeMismatchError</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/arg/struct.Iter.html' title='dbus::arg::Iter'>Iter</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.Signature.html' title='dbus::Signature'>Signature</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.Path.html' title='dbus::Path'>Path</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.Member.html' title='dbus::Member'>Member</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.Interface.html' title='dbus::Interface'>Interface</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.BusName.html' title='dbus::BusName'>BusName</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/struct.ErrorName.html' title='dbus::ErrorName'>ErrorName</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/tree/struct.Argument.html' title='dbus::tree::Argument'>Argument</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/tree/struct.MethodErr.html' title='dbus::tree::MethodErr'>MethodErr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/tree/enum.EmitsChangedSignal.html' title='dbus::tree::EmitsChangedSignal'>EmitsChangedSignal</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='dbus/tree/enum.Access.html' title='dbus::tree::Access'>Access</a>","impl&lt;M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='dbus/tree/struct.Factory.html' title='dbus::tree::Factory'>Factory</a>&lt;M&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
