-- 管理画面用：全ユーザーのスケジュールとメールアドレスを取得する関数
-- セキュリティのため、特定のユーザー（またはサービスロール）だけが実行できるようにするべきですが、
-- 今回は簡易実装として authenticated (ログイン済み) ユーザーなら呼べるようにし、
-- コード側でメールアドレスによる表示制御を行います。より厳密にする場合は関数内で実行ユーザーのチェックを行ってください。

create or replace function get_all_user_schedules()
returns table (
  email varchar,
  session_id text,
  is_selected boolean,
  is_interested boolean,
  updated_at timestamptz
)
security definer -- 重要: このオプションにより、実行ユーザーの権限ではなく、定義者(postgres)の権限で実行され、auth.usersにアクセス可能になります
as $$
begin
  return query
  select 
    au.email::varchar,
    us.session_id,
    us.is_selected,
    us.is_interested,
    us.updated_at
  from 
    user_schedules us
  join 
    auth.users au on us.user_id = au.id
  order by 
    us.updated_at desc;
end;
$$ language plpgsql;
